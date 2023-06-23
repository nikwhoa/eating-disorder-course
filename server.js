require('dotenv').config();
const fs = require('fs');
const sendpulse = require('sendpulse-api');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('@fastify/cors');
const fastify = require('fastify');
const { MongoClient, ServerApiVersion } = require('mongodb');

let fastifyOptions = { logger: true };

if (process.env.NODE_ENV === 'production') {
  console.info('Production mode');
  console.log('Production mode');
  fastifyOptions.https = {
    key: fs.readFileSync(path.join(__dirname, '.privkey-norenko.net.ua.pem')),
    cert: fs.readFileSync(path.join(__dirname, '.fullchain-norenko.net.ua.pem'))
  };

  fastifyOptions.http2 = true;
}

const server = fastify(fastifyOptions);

server.register(cors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
});

// connect to mongodb
const credentials = '.X509-cert-7088078844500846365.pem';

const client = new MongoClient(`${process.env.MONGODB_URI}`, {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1
});

// console.log(client);

client.connect().then((client) => {

  /*
  * Sending emails
  * */
  server.post('/api/send-email', async (req, res) => {

    const API_USER_ID = process.env.NEXT_PUBLIC_SENDPULSE_USER_ID;
    const API_SECRET = process.env.NEXT_PUBLIC_SENDPULSE_SECRET;
    const TOKEN_STORAGE = '/tmp/';

    sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, (token) => {
      if (token && token.is_error) {
        throw new Error('Error: ', token.errors);
      }

      /**
       * Function to process response data
       *
       * @param data
       */
      const answerGetter = function(data) {
        console.log(data);
      };

      sendpulse.addEmails(answerGetter, 238442, [{
        email: req.body.to, variables: {
          'Ім\'я': req.body.name,
          tariff: req.body.tariff,
          Phone: req.body.phone
        }
      }]);

      fetch('https://events.sendpulse.com/events/name/purchase_2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          'email': req.body.to,
          'tariff': req.body.tariff
        })
      }).then((response) => {
        if (response.status === 200) {
          res.status(200).send({ message: 'Email sent successfully' });
        }
      });
    });


  });

  // console.log(client);
  console.log('Connected successfully to mongodb server');
  // store the db connection in the fastify instance
  server.decorate('mongo', client.db('rhp-course'));

  // get info from the db collection form-data

  // server.get('/api/form-data', async (request, reply) => {
  //   try {
  //     const collection = server.mongo.collection('form-data');
  //     const result = await collection.find().toArray();
  //     reply.code(200).send(result);
  //   } catch (err) {
  //     server.log.error(err);
  //     reply.code(500).send({ error: 'Failed to get data' });
  //   }
  // });

  // Create the route
  server.post('/api/payment', async (request, reply) => {
    console.log('request.body');
    console.log(request.body);
    const { email, phone, name, tariff, price } = request.body;
    console.log(request.body);
    try {
      const collection = server.mongo.collection('form-data');
      const date = new Date();

      // const options = { year: 'numeric', month: 'long', day: 'numeric' };

      // const ukrainianDate = date.toLocaleDateString('uk-UA', options);
      const ukrainianDate = date.toLocaleDateString('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const result = await collection.insertOne({ email, phone, name, tariff, price, created_at: ukrainianDate });

      // const result = await collection.insertOne({ email, phone, name, tariff, price });
      reply.code(200).send({ _id: result.insertedId });
    } catch (err) {
      server.log.error(err);
      reply.code(500).send({ error: 'Failed to insert data' });
    }
  });




  // start the server
  server.listen({ port: 4000, host: '0.0.0.0' }, function(err, address) {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }

    server.log.info(`server listening on ${address}`);
  });

}).catch((err) => {
  server.log.error('Failed to connect to MongoDB', err);
  process.exit(1);
});
