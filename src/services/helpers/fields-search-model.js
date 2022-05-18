const { Op } = require('sequelize');
const sequelize = require('sequelize');

const listSearch = {
  Usuario:'id,sub,nome,email',
}

function fieldsModel(model, search){
  let fields = listSearch[model] || null;

  if (fields){
    let newFields = fields.split(',').map(data => {
      var fields = new Object();
      
      if (data === 'id') {
        fields = sequelize.where(
          sequelize.cast(sequelize.col(`${model}.${data}`), 'text'), {
             [Op.iLike]: `${search}%`
          }
       )
      } else {
        fields[data] = { [Op.like]: '%' + search + '%' };
      }

      return fields;
    });

    console.log('newFields',newFields);
    return newFields;
  }
}
exports.fieldsSearch = function(search, model){
  if (search && model){
    let or_like;
    or_like = fieldsModel(model,search);

    return or_like;
  }
}
