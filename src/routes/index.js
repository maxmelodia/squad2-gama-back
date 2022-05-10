const users = require("./users");

const url = "/api/v1/public";
module.exports = (app) => {
  app.use(
    url,
    users,
  );
};
