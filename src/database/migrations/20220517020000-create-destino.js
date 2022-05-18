"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "destino",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        usuario_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "usuario", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",          
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data_partida: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        data_retorno: {
          type: Sequelize.DATE,
          allowNull: true,
        },        
        cidade: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        pais_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        latitude: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        longitude: {
          type: Sequelize.STRING,
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("destino");
  },
};
