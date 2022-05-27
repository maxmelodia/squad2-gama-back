const PlanejamentoService = require('../../services/planejamento')
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async edit(req, res) {
    try {
          const planejamentoService = new PlanejamentoService('Planejamento', req);
          const planejamento = await planejamentoService.edit();

          if (planejamento){
            if (planejamento.type === 'success'){
              return res.status(200).json(HttpResponse.ok(planejamento.data))
            } else 
            if (planejamento.type === 'error'){
              return res.status(500).json(HttpResponse.serverError(planejamento.data))  
            }       
          }

          return res.status(500).json(HttpResponse.serverError('Nenhuma informação retornada!!!'))  

    } catch (error) {
      console.log(error);
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }  
}
