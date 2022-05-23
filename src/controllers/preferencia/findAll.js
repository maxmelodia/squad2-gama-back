const db = require('../../models');
const PreferenciaService = require('../../services/preferencia');
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async findAll(req, res) {
    try {
          const preferenciaService = new PreferenciaService('Preferencia', req);
          const data = await preferenciaService.findAndCountAll({});
          return res.status(200).json(HttpResponse.ok(data))
    } catch (error) {
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }
}
