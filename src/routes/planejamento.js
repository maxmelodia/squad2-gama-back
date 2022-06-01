const { Router } = require('express');
const Controller = require('../controllers');

const route = Router();

route
.post("/planejamento", Controller.Planejamento.store)
.put("/planejamento", Controller.Planejamento.edit)
.delete("/planejamento/:planejamento_id", Controller.Planejamento.destroy)

.get("/planejamento/:planejamento_id/mensagens", Controller.Planejamento.findAllMensagens)
.post("/planejamento/:planejamento_id/mensagem", Controller.Planejamento.storeMensagem)

.post("/planejamento/:planejamento_id/avaliacao", Controller.Planejamento.storeAvaliacao)


module.exports = route;
