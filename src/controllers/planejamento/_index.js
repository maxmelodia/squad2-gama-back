const { store } = require('./store')
const { edit } = require('./edit')
const { destroy } = require('./destroy')
const { findAllMensagens } = require('./findAllMensagens')
const { storeMensagem } = require('./storeMensagem')


module.exports = {
   store,  
   edit,
   destroy,
   findAllMensagens,
   storeMensagem
}
