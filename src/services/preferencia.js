const Services = require('./services');
const db = require('../models');

class PreferenciaService extends Services {
  constructor(_, req){
    super('Preferencia')
    this.req = req;  
  } 
}

module.exports = PreferenciaService
