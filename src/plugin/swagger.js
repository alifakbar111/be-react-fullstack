const fp = require("fastify-plugin");
const swagger = require("@fastify/swagger");
const swaggerUi = require("@fastify/swagger-ui");

module.exports = fp((fastify, options, next) => {
  fastify.register(swagger, {
    swagger: {
      info: {
        title: "Fastify Project",
        description: "Fastify swagger API",
        version: "0.1.0",
      },
      externalDocs: {
        url: "https://swagger.io",
        description: "Find more info here",
      },
      host: "localhost" || "127.0.0.1",
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
      tags: [{ name: "Temp", description: "Temp related end-points" }],
      definitions: {
        User: {
          type: "object",
          required: ["id", "email"],
          properties: {
            id: { type: "string", format: "uuid" },
            title: { type: "string" },
          },
        },
      },
    },
  });
  fastify.register(swaggerUi, {
    routePrefix: "/swagger",
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecificationClone: true,
  });
  next();
});
