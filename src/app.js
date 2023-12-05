const fastify = require("fastify");

const build = (opts = {}) => {
  const app = fastify(opts);
  app.get("/", async (request, reply) => {
    try {
      reply.code(200).send({ message: "hello world" });
    } catch (err) {
      reply.status(500).send({ error: err.message });
    }
  });
  return app;
};

module.exports = build;
