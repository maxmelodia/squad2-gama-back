module.exports = (sequelize, DataTypes) => {
    const Avaliacao = sequelize.define(
      "Avaliacao",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        planejamento_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: "planejamento", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",          
        },
        usuario_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: "usuario", key: "id" },
        },
        data_hora: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        nota: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        mensagem: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        freezeTableName: true,
        tableName: "avaliacao",
        createdAt: false,
        updatedAt: false,
      }
    );
  
    Avaliacao.changeSchema = (schema) =>
      Avaliacao.schema(schema, {
        schemaDelimiter: "`.`",
      });
  
      Avaliacao.associate = (models) => {
        Avaliacao.belongsTo(models.Planejamento, {
        foreignKey: "planejamento_id",
        as: "planejamento",
      });
      Avaliacao.belongsTo(models.Usuario, {
        foreignKey: "usuario_id",
        as: "usuario",
      });
    };    
  
    return Avaliacao;
  };
  