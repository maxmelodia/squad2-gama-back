const UsuarioService = require('../../services/usuario')
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async findbyId(req, res) {
    try{
          const { usuario_id } = req.params;
          const usuarioService = new UsuarioService('Usuario', null);

          const params = {
            where: {
              id: usuario_id
            }
          }

          const usuario = await usuarioService.findAll(params);
          return res.status(200).json(HttpResponse.ok(usuario));
          
    } catch (error) {
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }
}