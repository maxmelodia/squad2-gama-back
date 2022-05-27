module.exports = (sequelize, DataTypes) => {
    const Mensagem = sequelize.define(
      "Mensagem",
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
        dataHora: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        mensagem: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        tableName: "mensagem",
        createdAt: false,
        updatedAt: false,
      }
    );
  
    Mensagem.changeSchema = (schema) =>
      Mensagem.schema(schema, {
        schemaDelimiter: "`.`",
      });
  
      Mensagem.associate = (models) => {
        Mensagem.belongsTo(models.Planejamento, {
        foreignKey: "planejamento_id",
        as: "planejamento",
      });
      Mensagem.belongsTo(models.Usuario, {
        foreignKey: "usuario_id",
        as: "usuario",
      });
    };    
  
    return Mensagem;
  };
  