const ConexaoService = require('../../services/conexao')
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async destroy(req, res) {
    try{ 
          const { conexao_id } = req.params;
          const params = {
            where: { 
                id: conexao_id
            } 
          }
          const conexaoService = new ConexaoService('Conexao', null);
          const data = await conexaoService.destroy(params);
          return res.status(200).json(HttpResponse.ok(data));

    } catch (error) {
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }  
}
