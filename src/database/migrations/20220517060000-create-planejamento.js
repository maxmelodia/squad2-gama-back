"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "planejamento",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        conexao_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "conexao", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",          
        },
        data_plan: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        cidade: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        pais_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        situacao: {
          type: Sequelize.STRING,
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("planejamento");
  },
};
