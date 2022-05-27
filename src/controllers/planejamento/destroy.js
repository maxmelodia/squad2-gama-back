const PlanejamentoService = require('../../services/planejamento')
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async destroy(req, res) {
    try{ 
          const { planejamento_id } = req.params;
          const params = {
            where: { 
                id: planejamento_id
            } 
          }
          const planejamentoService = new PlanejamentoService('Planejamento', null);
          const planejamento = await planejamentoService.destroy(params);
          return res.status(200).json(HttpResponse.ok(planejamento))

    } catch (error) {
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }  
}
