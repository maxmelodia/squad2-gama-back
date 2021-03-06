const Services = require('./services');
const db = require('../models');

class UsuarioService extends Services {
  constructor(_, req){
    super('Usuario')
    this.req = req;  
  }

  fields (action) {
      const body = new Object();
      const aux = new Object();
      
      const { id, sub, nome, email, data_nascimento, cpf, cidade, pais_id, foto, telefone, descricao, usuario, destino, preferencias } = this.req.body;


      if (action === 'edit') {
        aux.id = id;          
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
      body.preferencias = preferencias;

      const ret = {
        body,
        aux
      };      

      return ret;
  }

  async create(){
    try{      
          const fields = this.fields('create');
          const usuario = await db.Usuario.create({
            ...fields.body
          });

        return {
          type:'success',
          data: usuario
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
         
          const usuario = await db.Usuario.update({
                ...fields.body
            },
            { where: { 
              id: fields.aux.id 
              } 
            }
          );
          
          if (fields.body.destino) {
            await this.changeDestino(fields.body.destino, fields.aux.id);
          };

          await this.chancePreferencias(fields.body.preferencias, fields.aux.id);

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
    await db.Destino.destroy({
      where: {
        usuario_id
      }
    });    

    for (const d of destino) {
      await db.Destino.create({
        usuario_id,
        ...d
      });
    };
  } 

  async chancePreferencias(preferencias, usuario_id) {
    await db.UsuarioPreferencia.destroy({
      where: { 
        usuario_id
      }       
    });

    for (const d of preferencias) {
        await db.UsuarioPreferencia.create({
          usuario_id,
          preferencia_id: d.id
        });
    };
  }   

}

module.exports = UsuarioService
