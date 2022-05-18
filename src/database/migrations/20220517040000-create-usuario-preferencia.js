"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "usuario_preferencia",
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
        preferencia_id: {
          type: Sequelize.INTEGER,
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("usuario_preferencia");
  },
};
