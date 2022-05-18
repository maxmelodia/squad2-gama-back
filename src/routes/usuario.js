const { Router } = require('express');
const Controller = require('../controllers');

const route = Router();

route
.get("/usuario", Controller.Usuario.findAll)
.get("/usuario/:usuario_id", Controller.Usuario.findbyId)
.post("/usuario", Controller.Usuario.store)
.put("/usuario", Controller.Usuario.edit)
.delete("/usuario/:usuario_id", Controller.Usuario.destroy);

module.exports = route;
