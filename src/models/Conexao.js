module.exports = (sequelize, DataTypes) => {

  const Conexao = sequelize.define(
    "Conexao",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      usuario_publicou_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "usuario", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",           
      },
      usuario_conectou_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "usuario", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",           
      },
      data_conexao: {
        type: DataTypes.DATE,
        allowNull: true,
      },        
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      tableName: "conexao",
      createdAt: false,
      updatedAt: false,
    }
  );

  Conexao.changeSchema = (schema) =>
    Conexao.schema(schema, {
      schemaDelimiter: "`.`",
    });

  Conexao.associate = (models) => {
    Conexao.belongsTo(models.Usuario, {
      foreignKey: "usuario_conectou_id",
      as: "usuario_conectou",
    });
    Conexao.belongsTo(models.Usuario, {
      foreignKey: "usuario_publicou_id",
      as: "usuario_publicou",
    });
  };    
    
  return Conexao;
};
