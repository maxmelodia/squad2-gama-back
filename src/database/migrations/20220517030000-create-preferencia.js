"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "preferencia",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        grupo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        tableName: "preferencia",
        createdAt: false,
        updatedAt: false,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("preferencia");
  },
};
