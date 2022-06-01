const Services = require('./services');
const db = require('../models');

class AvaliacaoService extends Services {
  constructor(_, req){
    super('Avaliacao')
    this.req = req;  
  }

  async create(){
    try{      
          const { planejamento_id, usuario_id, data_hora, nota, mensagem } = this.req.body;

          await db.Avaliacao.destroy({
            where: { 
              usuario_id,
              planejamento_id
            }             
          });

          const data = await db.Avaliacao.create({
            planejamento_id, 
            usuario_id, 
            data_hora, 
            nota, 
            mensagem
          });

        return {
          type:'success',
          data: data
        };
  
    } catch(error){
        return {
          type:'error',
          data: error.message
        };
    }  
  }
  
}

module.exports = AvaliacaoService;
