const ConexaoService = require('../../services/conexao')
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async store(req, res) {
    try {
          const conexaoService = new ConexaoService('Conexao', req);
          const conexao = await conexaoService.create();
          
          if (conexao){
            if (conexao.type === 'success'){
              return res.status(200).json(HttpResponse.ok(conexao.data))
            } else 
            if (conexao.type === 'error'){
              return res.status(500).json(HttpResponse.serverError(conexao.data))  
            }       
          }

          return res.status(500).json(HttpResponse.serverError('Nenhuma informação retornada!!!'))  

    } catch (error) {
      console.log(error);
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }  
}
