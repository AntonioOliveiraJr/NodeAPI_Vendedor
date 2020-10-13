'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vendas', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      vendedor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'vendedores', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      valor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comissao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vendas');
  }
};
