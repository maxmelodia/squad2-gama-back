const MensagemService = require('../../services/mensagem')
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async storeMensagem(req, res) {
    try {
          const mensagemService = new MensagemService('Mensagem', req);
          const mensagem = await mensagemService.create();
          
          if (mensagem){
            if (mensagem.type === 'success'){
              return res.status(200).json(HttpResponse.ok(mensagem.data))
            } else 
            if (mensagem.type === 'error'){
              return res.status(500).json(HttpResponse.serverError(mensagem.data))  
            }       
          }

          return res.status(500).json(HttpResponse.serverError('Nenhuma informação retornada!!!'))  

    } catch (error) {
      console.log(error);
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }  
}
