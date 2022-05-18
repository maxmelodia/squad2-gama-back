require("dotenv").config({path: process.env.NODE_ENV == "test" ? ".env.test" : ".env"});

module.exports = {
  dialect: process.env.DB_DIALECT || "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  schema: process.env.DB_SCHEMA,
  searchPath: "squad2",
  dialectOptions: {
    prependSearchPath: true,
  },
  define: {
    timestamps: true,
    underscored: true,
  },
};
