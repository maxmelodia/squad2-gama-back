 const { findAll } = require('./findAll');
 const { findbyId } = require('./findbyId')
 const { store } = require('./store')
 const { edit } = require('./edit')
 const { destroy } = require('./destroy')

 const { findAllConexao } = require('./findAllConexao');
 const { findAllPlanejamento } = require('./findAllPlanejamento');
 
module.exports = {
   findAll,
   findbyId,
   store,  
   edit,
   destroy,
   findAllConexao,
   findAllPlanejamento
}
