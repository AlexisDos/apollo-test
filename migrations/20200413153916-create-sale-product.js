'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SaleProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      discount: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      unitPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      saleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          isInt: true
        },
        references: {
          model: 'Sales',
          key: 'id',
          as: 'saleId'
        }
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          isInt: true
        },
        references: {
          model: 'Products',
          key: 'id',
          as: 'productId'
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SaleProducts');
  }
};