const Services = require('./services');
const db = require('../models');

class UsuarioService extends Services {
  constructor(_, req){
    super('Usuario')
    this.req = req;  
  }

  fields (action) {
      const body = new Object();
      const { id, sub, nome, email, data_nascimento, cpf, cidade, pais_id, foto, telefone, descricao, usuario, destino } = this.req.body;

      if (action === 'edit') {
        body.id = id;          
      };
      if (action === 'create') {
        body.usuario = usuario;
        body.email = email;
        body.sub = sub;
      };

      body.nome = nome;
      body.data_nascimento = data_nascimento;
      body.cpf = cpf;
      body.cidade = cidade;
      body.pais_id = pais_id;
      body.foto = foto;
      body.telefone = telefone;
      body.descricao = descricao;
      body.destino = destino;      
      return body;
  }

  async create(){
    try{      
          const fields = this.fields('create');
          const usuario = await db.Usuario.create({
            ...fields
          });

          await this.changeDestino(fields.destino, usuario.id);
        return {
          type:'success',
          data: usuario
        };
  
    } catch(error){
        console.log('usuario_service',error);
        return {
          type:'error',
          data: error.message
        };
    }  
  }
  
  async edit(){
    try{      
          const fields = this.fields('edit');
          const usuario = await db.Usuario.update({
                ...fields
            },
            { where: { 
              id: fields.id 
              } 
            }
          );

          await this.changeDestino(fields.destino);
        return {
          type:'success',
          data: usuario
        };

    } catch(error){
      console.log(error);
        return {
          type:'error',
          data: error.message
        };
    } 
  }

  async changeDestino(destino, usuario_id) {
    for (const d of destino) {
      console.log(destino);
      if (d.id) {
        await db.Destino.update({
          ...d
        },
        { where: { 
          id: d.id
          } 
        });
      } else {
        await db.Destino.create({
          usuario_id,
          ...d
        });
      };  
    };
  } 

}

module.exports = UsuarioService
