const tempDao = require("../dao/temp.dao");

const tempService = (fastify) => {
  const dao = tempDao(fastify);

  const getAll = async () => {
    const result = await dao.getAll();
    return result;
  };

  const postTitle = async (title) => {
    const result = await dao.postTitle(title);
    return result;
  };

  return {
    getAll,
    postTitle,
  };
};

module.exports = tempService;
