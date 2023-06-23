require('dotenv').config();
const fs = require('fs');
const path = require('path');
const cors = require('@fastify/cors');
const fastify = require('fastify');

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

server.get('/', async (req, res) => {
  res.send({ message: 'Hello world' });
});

server.post('/api/payment', async (request, reply) => {
  reply.send({ message: 'Payment is processing...' });
});

server.post('/api/send-email', async (req, res) => {

  const API_USER_ID = process.env.NEXT_PUBLIC_SENDPULSE_USER_ID;
  const API_SECRET = process.env.NEXT_PUBLIC_SENDPULSE_SECRET;

  const token = await new Promise((resolve, reject) => {
    fetch('https://api.sendpulse.com/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          grant_type: 'client_credentials',
          client_id: API_USER_ID,
          client_secret: API_SECRET
        })
      }
    ).then(res => res.json()).then((data) => {
      resolve(data.access_token);
    }).catch((error) => {
      reject(error);
    });
  });

  fetch('https://api.sendpulse.com/addressbooks/238442/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      emails: [
        {
          email: req.body.to,
          variables: {
            'Імʼя': req.body.name,
            phone: req.body.phone,
            tariff: req.body.tariff
          }
        }
      ]
    })
  }).then((response) => {
    if (response.status === 200) {
      // res.status(200).send({ message: 'Email sent successfully' });
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
    }
  });

});

server.listen({ port: 4000, host: '0.0.0.0' }, function(err, address) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  server.log.info(`server listening on ${address}`);
});
