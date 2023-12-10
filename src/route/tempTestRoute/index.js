const tempService = require("../../services/temp.service");

const route = async (fastify) => {
  const { getAll, postTitle } = tempService(fastify);
  /**
   * GET route handler that queries the "test" table
   * and returns all records.
   *
   * Returns 200 status code with query results on success.
   * Returns 500 status code with error message on error.
   */
  fastify.get("/", async (request, reply) => {
    try {
      const result = await getAll();

      reply.code(200).send(result);
    } catch (err) {
      reply.status(500).send({
        error: err.message,
      });
    }
  });

  /**
   * POST route handler that inserts a new record into the "test" table.
   *
   * Accepts a "title" field in the request body and inserts it into the
   * "test" table, returning the new record's id in the response.
   *
   * Returns 201 status code on success.
   * Returns 500 status code on error with the error message.
   */
  fastify.post("/", async (request, reply) => {
    try {
      fastify.log.info(`request with body ${request.body}`);

      const { title } = request.body;

      const result = await postTitle(title);

      reply.code(201).send(result);
    } catch (err) {
      reply.status(500).send({
        error: err.message,
      });
    }
  });
};

module.exports = route;
