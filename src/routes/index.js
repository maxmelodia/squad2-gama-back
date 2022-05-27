const usuario = require("./usuario");
const preferencia = require("./preferencia");
const conexao = require("./conexao");
const planejamento = require("./planejamento");

const url = "/api/v1/public";
module.exports = (app) => {
  app.use(
    url,
    usuario,
    preferencia,
    conexao,
    planejamento
  );
};
