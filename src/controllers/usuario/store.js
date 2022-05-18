const UsuarioService = require('../../services/usuario')
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async store(req, res) {
    try {
          const usuarioService = new UsuarioService('Usuario', req);
          const usuario = await usuarioService.create();
          
          if (usuario){
            if (usuario.type === 'success'){
              return res.status(200).json(HttpResponse.ok(usuario.data))
            } else 
            if (usuario.type === 'error'){
              return res.status(500).json(HttpResponse.serverError(usuario.data))  
            }       
          }

          return res.status(500).json(HttpResponse.serverError('Nenhuma informação retornada!!!'))  

    } catch (error) {
      console.log(error);
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }  
}
