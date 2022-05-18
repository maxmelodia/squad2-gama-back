"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "usuario",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        sub: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        usuario: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data_nascimento: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        cpf: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cidade: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        pais_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        foto: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        telefone: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        descricao: {
          type: Sequelize.STRING,
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("usuario");
  },
};
