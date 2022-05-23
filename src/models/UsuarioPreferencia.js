module.exports = (sequelize, DataTypes) => {

  const UsuarioPreferencia = sequelize.define(
    "UsuarioPreferencia",
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
      preferencia_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "preferencia", key: "id" },
      },
    },
    {
      freezeTableName: true,
      tableName: "usuario_preferencia",
      createdAt: false,
      updatedAt: false,
    }
  );

  UsuarioPreferencia.changeSchema = (schema) =>
    UsuarioPreferencia.schema(schema, {
      schemaDelimiter: "`.`",
    });

  return UsuarioPreferencia;
};
