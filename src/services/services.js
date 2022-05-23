const database = require('../models');
const ConditionsQuery = require('./helpers/conditions-query');
const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/database.js');
const sequelize = new Sequelize(config);

class Services {
  constructor(nomeDoModelo, req) {
    this.nomeDoModelo = nomeDoModelo;
    this.req = req;
  }

  async count(params = {}) {
    return database[this.nomeDoModelo].count({ ...params  })
  }

  async findAll(params = {}) {
    return database[this.nomeDoModelo].findAll({ ...params  })
  }

  async findAndCountAll(path_conditions, includes, noPaginate = false) {
    const conditions = new ConditionsQuery();
    conditions.dumpParams(this.req, this.nomeDoModelo, path_conditions);
    const paginacao = (this.req.query.lookup || noPaginate) ? {} : 
    {
      limit: conditions.limit,
      offset: conditions.getOffSet()
    }

    const {count, rows} = await database[this.nomeDoModelo].findAndCountAll({ 
      ...conditions.options,
      ...paginacao,
      ...includes
    });

    return {
      page: conditions.currentPage,
      totalCount: count,
      data: rows
    }    
  }

  async rawQuery(query, params) {
    const [results] = await sequelize.query(query, {replacements: params});
    return {
      results
    }
  }  

  async create() {
    try{
          const body = this.req.body;
          const data = await database[this.nomeDoModelo].create(body);
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

  async edit(){
    const { origem_id } = this.req.params;
    const data = this.req.body;
    let queryWhere = new Object();

    if (origem_id){
      queryWhere.origem_id = origem_id;
    }

    if (data.id){
      queryWhere.id = id;
    }

    return database[this.nomeDoModelo]
      .update(data, { where: { ...queryWhere } })
  }

  async destroy(params) {
    return database[this.nomeDoModelo].destroy({ ...params })
  }

}

module.exports = Services
