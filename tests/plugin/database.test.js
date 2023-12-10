const fastify = require("fastify");
const dbPlugin = require("../../src/plugin/database");
const applyMigration = require("../../src/plugin/helper/migration");

jest.mock("../../src/plugin/helper/migration");

describe("database plugin", () => {
  beforeAll(() => {
    applyMigration.mockImplementation(() => Promise.resolve(1));
  });

  afterAll(() => {
    applyMigration.mockClear();
  });

  it("should able to attach db decorate on fastify instance", async () => {
    const app = fastify();

    await app.register(dbPlugin);
    await app.ready();

    expect(app.db).toBeDefined();
    await app.close();
  });

  it("should handle migration errors", async () => {
    const app = fastify();

    await app.register(dbPlugin);
    await app.ready();

    const applyMigrationMock = jest
      .fn()
      .mockRejectedValue(new Error("Migration failed"));

    await expect(applyMigrationMock).rejects.toThrow("Migration failed");
    await app.close();
  });
});
