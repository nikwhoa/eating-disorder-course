module.exports = {
  apps: [
    {
      name: "eating-disorder-course.norenko.net.ua-fastify",
      script: "npm",
      args: "run fastify",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      dependencies: ["eating-disorder-course.norenko.net.ua-fastify"],
      name: "eating-disorder-course.norenko.net.ua",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ]
}
