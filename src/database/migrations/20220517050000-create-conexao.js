"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "conexao",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        usuario_publicou_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "usuario", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",           
        },
        usuario_conectou_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "usuario", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",           
        },
        data_conexao: {
          type: Sequelize.DATE,
          allowNull: true,
        },        
        status: {
          type: Sequelize.STRING,
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("conexao");
  },
};
