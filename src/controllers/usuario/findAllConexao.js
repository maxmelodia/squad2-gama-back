const db = require('../../models');
const ConexaoService = require('../../services/conexao');
const HttpResponse = require('../../config/helpers/http-response');

module.exports = {
  async findAllConexao(req, res) {
    try {
          const { sub } = req.params;
          const conexaoService = new ConexaoService('Conexao', req);

          const params = {
            order: [ [ 'id', 'DESC' ] ],
            include: [
              { model: db.Usuario, as: "usuario_conectou",
                attributes: ['id', 'sub', 'usuario', 'nome', 'email', 'data_nascimento', 'cpf', 'cidade', 'telefone', 'descricao','foto'],
                include: [
                  { model: db.Destino, as: "destino",
                    attributes: ['id','usuario_id','descricao','data_partida','data_retorno','cidade','pais_id','latitude','longitude']
                  },
                  {
                    model: db.Preferencia,
                    as: 'preferencias',
                    through: { attributes: [] },
                  },                
                ]
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
