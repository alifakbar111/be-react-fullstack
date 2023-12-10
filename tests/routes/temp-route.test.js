const build = require("../../src/app");

let app;

describe("root route", () => {
  beforeEach(() => {
    app = build();
  });

  afterEach(() => {
    app.close();
  });
  it("should return id when post routes called with valid data", async () => {
    const response = await app.inject({
      method: "POST",
      url: "/api/v1/test",
      payload: {
        title: `test ${new Date().getTime()}`,
      },
    });
    expect(response.statusCode).toBe(201);
    expect(response.json()).toBeDefined();
  });

  it("should return 200 for GET route", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/api/v1/test",
    });
    expect(response.statusCode).toBe(200);
  });
});
