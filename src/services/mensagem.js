const Services = require('./services');
const db = require('../models');

class MensagemService extends Services {
  constructor(_, req){
    super('Mensagem')
    this.req = req;  
  }

  fields (action) {
      // const body = new Object();
      // const { id, sub, nome, email, data_nascimento, cpf, cidade, pais_id, foto, telefone, descricao, usuario, destino, preferencias } = this.req.body;

      // if (action === 'edit') {
      //   body.id = id;          
      // };
      // if (action === 'create') {
      //   body.usuario = usuario;
      //   body.email = email;
      //   body.sub = sub;
      // };

      // body.nome = nome;
      // body.data_nascimento = data_nascimento;
      // body.cpf = cpf;
      // body.cidade = cidade;
      // body.pais_id = pais_id;
      // body.foto = foto;
      // body.telefone = telefone;
      // body.descricao = descricao;

      // body.destino = destino;      
      // body.preferencias = preferencias;
      // return body;
  }

  async create(){
    try{      
          // const fields = this.fields('create');
          // const usuario = await db.Usuario.create({
          //   ...fields
          // });

        return {
          type:'success',
          data: 'usuario'
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
          // const fields = this.fields('edit');
         
          // const usuario = await db.Usuario.update({
          //       ...fields
          //   },
          //   { where: { 
          //     id: fields.id 
          //     } 
          //   }
          // );

          // if (fields.destino) {
          //   await this.changeDestino(fields.destino, fields.id);
          // };

          // await this.chancePreferencias(fields.preferencias, fields.id)

        return {
          type:'success',
          data: 'usuario'
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

module.exports = Mensagem;
