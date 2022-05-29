"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "mensagem",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        planejamento_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "planejamento", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",          
        },
        usuario_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "usuario", key: "id" },
        },
        data_hora: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        mensagem: {
          type: Sequelize.STRING,
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("mensagem");
  },
};
