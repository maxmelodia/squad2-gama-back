const Services = require('./services');
const db = require('../models');

class ConexaoService extends Services {
  constructor(_, req){
    super('Conexao')
    this.req = req;  
  }

  fields (action) {

    try {
      const body = new Object();
      const aux = new Object();
      const { id, usuario_publicou_id, usuario_conectou_id, data_conexao, status } = this.req.body;

      if (action === 'edit') {
        aux.id = id;          
      };
      if (action === 'create') {
        body.usuario_publicou_id = usuario_publicou_id;
        body.usuario_conectou_id = usuario_conectou_id;
        body.data_conexao = data_conexao;
      };
      body.status = status;
      
      const ret = {
        body,
        aux
      }
      return ret; 
    } catch(error){
      console.log(error);
    } 

  }

  async create(){
    try{      
          const fields = this.fields('create');
          const conexao = await db.Conexao.create({
            ...fields.body
          });

        return {
          type:'success',
          data: conexao
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
          const fields = this.fields('edit');
          const conexao = await db.Conexao.update({
                 ...fields.body
             },
             { where: { 
               id: fields.aux.id 
               } 
             }
           );

        return {
          type:'success',
          data: conexao
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

module.exports = ConexaoService
