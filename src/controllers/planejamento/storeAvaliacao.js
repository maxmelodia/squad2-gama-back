const AvaliacaoService = require('../../services/avaliacao')
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async storeAvaliacao(req, res) {
    try {
          const avaliacaoService = new AvaliacaoService('Avaliacao', req);
          const avaliacao = await avaliacaoService.create();
          
          if (avaliacao){
            if (avaliacao.type === 'success'){
              return res.status(200).json(HttpResponse.ok(avaliacao.data))
            } else 
            if (avaliacao.type === 'error'){
              return res.status(500).json(HttpResponse.serverError(avaliacao.data))  
            }       
          }

          return res.status(500).json(HttpResponse.serverError('Nenhuma informação retornada!!!'))  

    } catch (error) {
      console.log(error);
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }  
}
