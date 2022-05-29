const db = require('../../models');
const MensagemService = require('../../services/mensagem');
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async findAllMensagens(req, res) {
    try {
          const { planejamento_id } = req.params;

          const mensagemService = new MensagemService('Mensagem', req);

          const params = {
            where: {
              planejamento_id: planejamento_id
            },
            order: [ [ 'id', 'DESC' ] ],
            include: [
              { model: db.Usuario, as: "usuario",
                attributes: ['id', 'nome'],
              }
            ]
          };
          
          const data = await mensagemService.findAll(params);
          return res.status(200).json(HttpResponse.ok(data))
    } catch (error) {
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }
}
