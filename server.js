const fastify = require('fastify')

fastify({
  logger: true
})
const server = fastify()

server.register(require('@fastify/http-proxy'), {
  upstream: 'http://norenko.net.ua',
  http2: true // optional
})

fastify().get('/api/questions', async (request, reply) => {
  // send json data from file to client
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(require('./app/questions/questions.json'))
})

// Run the server!
fastify().listen({ port: 4000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`);
  // Server is now listening on ${address}
})