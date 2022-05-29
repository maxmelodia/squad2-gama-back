const Services = require('./services');
const db = require('../models');

class MensagemService extends Services {
  constructor(_, req){
    super('Mensagem')
    this.req = req;  
  }

  async create(){
    try{      
          const { planejamento_id, usuario_id, data_hora, mensagem } = this.req.body;
          const data = await db.Mensagem.create({
            planejamento_id, 
            usuario_id, 
            data_hora, 
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

module.exports = MensagemService;
