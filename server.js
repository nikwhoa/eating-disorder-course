require('dotenv').config();
const fs = require('fs');
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

client.connect().then((client) => {
  // store the db connection in the fastify instance
  server.decorate('mongo', client.db('rhp-course'));

  // Create the route
  server.post('/api/payment', async (request, reply) => {
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
