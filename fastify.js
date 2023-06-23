require('dotenv').config();
const fs = require('fs');
const sendpulse = require('sendpulse-api');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('@fastify/cors');
const fastify = require('fastify')({
  logger: true
});
const { MongoClient, ServerApiVersion } = require('mongodb');

console.log('fasttttttt');

if (process.env.NODE_ENV === 'production') {
  console.info('Production mode');
  console.log('Production mode');
  fastify.options.https = {
    key: fs.readFileSync(path.join(__dirname, '.privkey-norenko.net.ua.pem')),
    cert: fs.readFileSync(path.join(__dirname, '.fullchain-norenko.net.ua.pem'))
  };

  fastify.options.http2 = true;
}

fastify.register(require('@fastify/cors'), {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
})

// connect to mongodb
fastify.register(require('@fastify/mongodb'), {
  url: `${process.env.MONGODB_URI}`,
  sslKey: '.X509-cert-7088078844500846365.pem',
  sslCert: '.X509-cert-7088078844500846365.pem',
  serverApi: ServerApiVersion.v1
});

fastify.get('/', async (req, res) => {
  return { hello: 'world' };
});

fastify.post('/api/send-email', async (req, res) => {
  console.log('send-email');
  const API_USER_ID = process.env.NEXT_PUBLIC_SENDPULSE_USER_ID;
  const API_SECRET = process.env.NEXT_PUBLIC_SENDPULSE_SECRET;
  const TOKEN_STORAGE = '/tmp/';

  console.log(req.body);

  sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, (token) => {

    if (token && token.is_error) {
      console.error('Error: ', token.errors);
    }

    /**
     * Function to process response data
     *
     * @param data
     */
    const answerGetter = function(data) {
      console.log(data);
    };

    sendpulse.addEmails(answerGetter, 238442, [
      {
        'email': `${req.body.to}`,
        'variables': {
          'name': `${req.body.name}`,
          'tariff': `${req.body.tariff}`,
          'phone': `${req.body.phone}`
        }
      }
    ]);
  });
});

fastify.listen({ port: 4000, host: '0.0.0.0' }, function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
