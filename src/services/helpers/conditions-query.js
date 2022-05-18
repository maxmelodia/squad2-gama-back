const { Op } = require("sequelize");
const searchModel = require("./fields-search-model");
const attModel = require("./fields-attributes-model");

class ConditionsQuery {
  
  constructor() {
    this.currentPage = 1;
    this.limit = 10;
    this.options = {};
    this.model = "";
  }

  dumpParams(req, model, condition_path) {
    const { limit, page, orderBy, search, lookup } = req.query;
    this.model = model;

    if (limit) {
      this.setLimit(limit);
    }

    if (page) {
      this.setCurrentPage(page);
    }

    this.options = {
      ...this.queryAttributes(lookup, model),
      ...this.queryWhere(condition_path, search, this.model),
      ...this.queryOrderBy(orderBy),
    };
  }

  getOffSet() {
    return this.currentPage * this.limit - this.limit;
  }

  setLimit(limit) {
    if (limit != null && limit != undefined) {
        this.limit = limit;
      } else {
        this.limit = 10;
      }
  }

  setOptions(options) {
    this.options = options;
  }

  setCurrentPage(page) {
    //this.currentPage = page ?? 1; //Coalescencia null EC2020 revisar
    if (page != null && page != undefined) {
      this.currentPage = page;
    } else {
      this.currentPage = 1;
    }
  }

  queryAttributes(lookup, model){
    if (lookup == 'true' && model){
        return attModel.fieldsAtt(model)
    }
  }

  //FUNÇÕES DE ORDENAÇÃO E FILTROS
  queryOrderBy(orderBy) {
    if (orderBy) {
      let newOrder = orderBy.split(",").map((data) => {
        let direction = "ASC";
        if (data[0] == "-") {
          data = data.replace("-", "");
          direction = "DESC";
        }
        return [data, direction];
      });

      if (newOrder) {
        return {
          order: [...newOrder],
        };
      }
    } else {
      return {
        order: [ [ 'id', 'DESC' ] ]
      }
    };
  }

  queryWhere(condition_path, search, model) {
    let or_like = searchModel.fieldsSearch(search, model);
    if (or_like || condition_path) {
      return {
        where: {
          ...this.queryAnd(condition_path),
          ...this.queryOrLike(or_like),
        },
      };
    }
  }

  queryAnd(and_fields) {
    if (and_fields) {
      return {
        [Op.and]: [and_fields],
      };
    }
  }

  queryOrLike(or_like) {
    if (or_like) {
      return {
        [Op.or]: [...or_like],
      };
    }
  }
}

module.exports = ConditionsQuery;
