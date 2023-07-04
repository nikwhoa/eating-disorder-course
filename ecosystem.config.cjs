module.exports = {
  apps: [
    {
      name: "eating-disorder-course-fastify",
      script: "npm",
      args: "run fastify",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      dependencies: ["eating-disorder-course-fastify"],
      name: "eating-disorder-course",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ]
}
