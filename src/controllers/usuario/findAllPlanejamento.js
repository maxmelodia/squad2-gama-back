const db = require('../../models');
const { Op } = require("sequelize");
const UsuarioService = require('../../services/usuario');
const PlanejamentoService = require('../../services/planejamento');
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async findAllPlanejamento(req, res) {
    try {
          const { sub } = req.params;
          const usuarioService = new UsuarioService('Usuario', null);
          const usuario = await usuarioService.findAll({where: {sub}});
          const usuario_id = usuario[0].id;

          const planejamentoService = new PlanejamentoService('Planejamento', req);
          const params = {
            order: [ [ 'id', 'DESC' ] ],
            include: [
              { model: db.Conexao, as: "conexao",
                where: {
                  [Op.or]: [{usuario_publicou_id: usuario_id}, {usuario_conectou_id: usuario_id}]
                },
                include: [
                  { model: db.Usuario, as: "usuario_publicou",
                    attributes: ['id', 'sub', 'usuario', 'nome', 'email', 'data_nascimento', 'cpf', 'cidade', 'telefone', 'descricao', 'foto'],
                  },
                  { model: db.Usuario, as: "usuario_conectou",
                    attributes: ['id', 'sub', 'usuario', 'nome', 'email', 'data_nascimento', 'cpf', 'cidade', 'telefone', 'descricao', 'foto'],
                  }
                ]
              }
            ]
          };
          
          const data = await planejamentoService.findAll(params);
          return res.status(200).json(HttpResponse.ok(data))
    } catch (error) {
      return res.status(500).json(HttpResponse.serverError(error.message))
    }
  }
}
