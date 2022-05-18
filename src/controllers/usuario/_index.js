 const { findAll } = require('./findAll');
 const { findbyId } = require('./findbyId')
 const { store } = require('./store')
 const { edit } = require('./edit')
 const { destroy } = require('./destroy')

module.exports = {
   findAll,
   findbyId,
   store,  
   edit,
   destroy
}
