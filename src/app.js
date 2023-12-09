const fastify = require("fastify");
const db = require("./plugin/database");
const testRoute = require("./route/tempTestRoute");

const build = (opts = {}) => {
  const app = fastify(opts);

  app.register(db);
  app.register(testRoute, { prefix: "api/v1/test" });

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
