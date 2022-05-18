const db = require('../../models');
const UsuarioService = require('../../services/usuario');
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async findAll(req, res) {
    try {
          const usuarioService = new UsuarioService('Usuario', req);

          const includes = {
            include: [
              { model: db.Destino, as: "destino",
                attributes: ['id','usuario_id','descricao','data_partida','data_retorno','cidade','pais_id','latitude','longitude']
              }
            ]
          }
          
          const data = await usuarioService.findAndCountAll({},includes);
          return res.status(200).json(HttpResponse.ok(data))
    } catch (error) {
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }
}
