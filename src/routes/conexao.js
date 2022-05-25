const { Router } = require('express');
const Controller = require('../controllers');

const route = Router();

route
.post("/conexao", Controller.Conexao.store)
.put("/conexao", Controller.Conexao.edit)
.delete("/conexao/:conexao_id", Controller.Conexao.destroy);

module.exports = route;
