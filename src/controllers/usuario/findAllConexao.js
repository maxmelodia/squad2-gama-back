const db = require('../../models');
const ConexaoService = require('../../services/conexao');
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async findAllConexao(req, res) {
    try {
          const conexaoService = new ConexaoService('Conexao', req);

          const includes = {
            include: [
              { model: db.Usuario, as: "usuario_conectou",
                attributes: ['id', 'sub', 'usuario', 'nome', 'email', 'data_nascimento', 'cpf', 'cidade', 'telefone', 'descricao','foto']
              },
              { model: db.Usuario, as: "usuario_publicou",
                attributes: ['id', 'sub', 'usuario', 'nome', 'email', 'data_nascimento', 'cpf', 'cidade', 'telefone', 'descricao', 'foto']
              },
            ]
          }
          
          const data = await conexaoService.findAndCountAll({},includes);
          return res.status(200).json(HttpResponse.ok(data))
    } catch (error) {
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }
}
