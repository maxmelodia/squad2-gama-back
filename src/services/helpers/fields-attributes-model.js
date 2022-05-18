function attModel(){
  const listAtt = {
    Usuario:['id', 'sub', 'nome','email'],
  }
  return listAtt; 
}
exports.fieldsAtt = function(model){
  const list = attModel()
  const attributes = list[model]
  if (attributes){
    return {
      attributes: attributes
    }
  }
}
