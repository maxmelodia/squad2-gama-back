const db = require('../../models');
const { Op } = require('sequelize');
const UsuarioService = require('../../services/usuario');
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async findAll(req, res) {
    try {
          const usuarioService = new UsuarioService('Usuario', req);

          const { searchDestino = '', searchPref = '' } = req.query;

          const includes = {
            include: [
              { model: db.Avaliacao, as: 'avaliacao'},    
              { model: db.Destino, as: "destino",
                where: { cidade: { [Op.iLike]: '%' + searchDestino + '%' } }, 
                attributes: ['id','usuario_id','descricao','data_partida','data_retorno','cidade','pais_id','latitude','longitude']
              },
              {
                model: db.Preferencia, as: 'preferencias',
                where: { descricao: { [Op.iLike]: '%' + searchPref + '%' } }, 
                through: { attributes: [] },
              },    
              { model: db.Conexao, as: "conexoes_recebidas"},
            ]
          }
          
          const data = await usuarioService.findAndCountAll({},includes);
          return res.status(200).json(HttpResponse.ok(data))
    } catch (error) {
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }
}
