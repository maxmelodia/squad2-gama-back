const UsuarioService = require('../../services/usuario')
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async destroy(req, res) {
    try{ 
          const { usuario_id } = req.params;
          const params = {
            where: { 
                id: usuario_id
            } 
          }
          const usuarioService = new UsuarioService('Usuario', null);
          const usuario = await usuarioService.destroy(params);
          return res.status(200).json(HttpResponse.ok(usuario))

    } catch (error) {
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }  
}
