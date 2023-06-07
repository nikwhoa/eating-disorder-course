require('dotenv').config();
const fs = require('fs');
const path = require('path');
const cors = require('@fastify/cors');
let fastify = require('fastify');

let fastifyOptions = { logger: true };

if (process.env.NODE_ENV === 'production') {
  console.info('Production mode');
  console.log('Production mode');
  fastifyOptions.https = {
    key: fs.readFileSync(path.join(__dirname, '.privkey-norenko.net.ua.pem')),
    cert: fs.readFileSync(path.join(__dirname, '.fullchain-norenko.net.ua.pem')),
  };

  fastifyOptions.http2 = true;
}

fastify = fastify(fastifyOptions);

fastify.register(cors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

fastify.get('/api/questions', async (request, reply) => {
  // send json data from file to client
  reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send(require('@/app/test/questions/questions.json'));
});

fastify.listen({ port: 4000, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
