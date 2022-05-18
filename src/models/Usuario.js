module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      sub: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      data_nascimento: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      cpf: {
        type: DataTypes.STRING,
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
      foto: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      tableName: "usuario",
      createdAt: false,
      updatedAt: false,
    }
  );

  Usuario.changeSchema = (schema) =>
    Usuario.schema(schema, {
      schemaDelimiter: "`.`",
    });

  Usuario.associate = (models) => {
    Usuario.hasMany(models.Destino, {
      foreignKey: "usuario_id",
      as: "destino",
    });
  };    

  return Usuario;
};
