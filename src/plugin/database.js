const fp = require("fastify-plugin");
const pgPromise = require("pg-promise")();
const applyMigration = require("./helper/migration");

const db = async (fastify, options, next) => {
  const dbConn = pgPromise({
    host: "localhost",
    database: "postgres",
    user: "postgres",
    password: "password",
    port: 5432,
  });

  fastify.decorate("db", dbConn);
  fastify.log.info("migration is about to run");

  const migrationCount = await applyMigration();
  fastify.log.info(
    `migration ran successfully, ${migrationCount} migrations applied`,
  );
  next();
};

module.exports = fp(db);
