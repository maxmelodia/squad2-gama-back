const { Router } = require('express');
const Controller = require('../controllers');

const route = Router();

route
.get("/preferencia", Controller.Preferencia.findAll);

module.exports = route;
