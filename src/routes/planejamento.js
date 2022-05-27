const { Router } = require('express');
const Controller = require('../controllers');

const route = Router();

route
.post("/planejamento", Controller.Planejamento.store)
.put("/planejamento", Controller.Planejamento.edit)
.delete("/planejamento/:planejamento_id", Controller.Planejamento.destroy)

module.exports = route;

