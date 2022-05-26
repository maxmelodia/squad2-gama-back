const db = require('../../models');
const sequelize = require('sequelize');
const ConexaoService = require('../../services/conexao');
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async findAllConexao(req, res) {
    try {
          const { sub } = req.params;
          const conexaoService = new ConexaoService('Conexao', req);

          const params = {
            // where: {
            //   sub: sequelize.col("usuario_publicou.sub")
            // },
            include: [
              { model: db.Usuario, as: "usuario_conectou",
                attributes: ['id', 'sub', 'usuario', 'nome', 'email', 'data_nascimento', 'cpf', 'cidade', 'telefone', 'descricao','foto']
              },
              { model: db.Usuario, as: "usuario_publicou",
                attributes: ['id', 'sub', 'usuario', 'nome', 'email', 'data_nascimento', 'cpf', 'cidade', 'telefone', 'descricao', 'foto'],
                where: {
                  sub: sub
                }
              },
            ]            
          }
          
          const data = await conexaoService.findAll(params);
          return res.status(200).json(HttpResponse.ok(data))
    } catch (error) {
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }
}
