const { Router } = require('express');
const Controller = require('../controllers');

const route = Router();

route
.get("/usuario", Controller.Usuario.findAll)
.get("/usuario/:sub", Controller.Usuario.findbyId)
.post("/usuario", Controller.Usuario.store)
.put("/usuario", Controller.Usuario.edit)
.delete("/usuario/:sub", Controller.Usuario.destroy)

.get("/usuario/:sub/conexoes", Controller.Usuario.findAllConexao)
.get("/usuario/:sub/planejamentos", Controller.Usuario.findAllPlanejamento)

module.exports = route;
