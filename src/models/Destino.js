module.exports = (sequelize, DataTypes) => {
  const Destino = sequelize.define(
    "Destino",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "usuario", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },   
      descricao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      data_partida: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      data_retorno: {
        type: DataTypes.DATE,
        allowNull: true,
      },      
      cidade: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pais_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },      
      latitude: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      longitude: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      tableName: "destino",
      createdAt: false,
      updatedAt: false,
    }
  );

  Destino.changeSchema = (schema) =>
    Destino.schema(schema, {
      schemaDelimiter: "`.`",
    });

    Destino.associate = (models) => {
      Destino.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      as: "usuario",
    });
  };    

  return Destino;
};
