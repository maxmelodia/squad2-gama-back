const db = require('../../models');
const UsuarioService = require('../../services/usuario');
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async findbyId(req, res) {
    try{
          const { sub } = req.params;
          const usuarioService = new UsuarioService('Usuario', null);

          const params = {
            where: {
              sub
            },
            include: [
              { model: db.Destino, as: "destino",
                attributes: ['id','usuario_id','descricao','data_partida','data_retorno','cidade','pais_id','latitude','longitude']
              },
              {
                model: db.Preferencia,
                as: 'preferencias',
                through: { attributes: [] },
              },              
            ]            
          }

          const usuario = await usuarioService.findAll(params);
          return res.status(200).json(HttpResponse.ok(usuario));
          
    } catch (error) {
      console.log(error);
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }
}