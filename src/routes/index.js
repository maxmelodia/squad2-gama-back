const usuario = require("./usuario");

const url = "/api/v1/public";
module.exports = (app) => {
  app.use(
    url,
    usuario,
  );
};
