const Services = require('./services');
const db = require('../models');

class PlanejamentoService extends Services {
  constructor(_, req){
    super('Planejamento')
    this.req = req;  
  }

  async create(){
    try{      
          const { conexao_id, data_plan, cidade, descricao, situacao } = this.req.body;
          
          const planejamento = await db.Planejamento.create({
            conexao_id, 
            data_plan, 
            cidade, 
            descricao, 
            situacao
           });

        return {
          type:'success',
          data: planejamento
        };
  
    } catch(error){
        return {
          type:'error',
          data: error.message
        };
    }  
  }
  
  async edit(){
    try{      
        const { id, cidade, descricao, situacao } = this.req.body;
            
        const planejamento = await db.Planejamento.update({
          cidade, 
          descricao, 
          situacao
        },
        { where: { 
          id 
          } 
        }        
        );

        return {
          type:'success',
          data: planejamento
        };

    } catch(error){
      console.log(error);
        return {
          type:'error',
          data: error.message
        };
    } 
  }
}

module.exports = PlanejamentoService;
