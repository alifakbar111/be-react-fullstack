const dotenv = require("dotenv").config();

if (!dotenv.parsed.POSTGRES_URI) {
  dotenv.parsed.POSTGRES_URI =
    "postgres://postgres:password@localhost:5432/postgres";
}
