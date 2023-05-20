const fastify = require('fastify')({
  logger: true
})

fastify.get('/api/questions', async (request, reply) => {
  // send json data from file to client
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(require('./app/questions/questions.json'))
})

// Run the server!
fastify.listen({ port: 4000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})