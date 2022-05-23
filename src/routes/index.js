const usuario = require("./usuario");
const preferencia = require("./preferencia");

const url = "/api/v1/public";
module.exports = (app) => {
  app.use(
    url,
    usuario,
    preferencia
  );
};
