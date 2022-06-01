module.exports = (sequelize, DataTypes) => {
    const Planejamento = sequelize.define(
      "Planejamento",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        conexao_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: "conexao", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",          
        },
        data_plan: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        cidade: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        pais_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        descricao: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        situacao: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        tableName: "planejamento",
        createdAt: false,
        updatedAt: false,
      }
    );
  
    Planejamento.changeSchema = (schema) =>
      Planejamento.schema(schema, {
        schemaDelimiter: "`.`",
      });
  
      Planejamento.associate = (models) => {
        Planejamento.belongsTo(models.Conexao, {
        foreignKey: "conexao_id",
        as: "conexao",
      });
        Planejamento.hasMany(models.Avaliacao, {
        foreignKey: "planejamento_id",
        as: "avaliacao",
      });      
    };    
  
    return Planejamento;
  };
  