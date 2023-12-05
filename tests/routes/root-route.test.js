const build = require("../../src/app");

let app;
describe("root route", () => {
  beforeEach(() => {
    app = build();
  });

  afterEach(() => {
    app.close();
  });

  it("should respond with 'hello world' with return 200", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/",
    });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ message: "hello world" });
  });
});
