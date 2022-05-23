module.exports = (sequelize, DataTypes) => {
  const Preferencia = sequelize.define(
    "Preferencia",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      grupo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      tableName: "preferencia",
      createdAt: false,
      updatedAt: false,
    }
  );

  Preferencia.changeSchema = (schema) =>
    Preferencia.schema(schema, {
      schemaDelimiter: "`.`",
    });

  Preferencia.associate = (models) => {
    Preferencia.belongsToMany(models.Usuario, {
      through: 'usuario_preferencia',
      as: 'usuarios',
      foreignKey: 'preferencia_id',
    });     
  };       

  return Preferencia;
};
