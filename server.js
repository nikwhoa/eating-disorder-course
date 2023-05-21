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


fastify.listen({ port: 4000, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})