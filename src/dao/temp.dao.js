const dao = (fastify) => {
  const getAll = async () => {
    const query = "SELECT * FROM test";
    const result = await fastify.db.query(query);
    return result;
  };

  const postTitle = async (title) => {
    const query = "INSERT INTO test (title) VALUES ($1) RETURNING id";
    const result = await fastify.db.query(query, [title]);
    return result;
  };

  return {
    getAll,
    postTitle,
  };
};

module.exports = dao;
