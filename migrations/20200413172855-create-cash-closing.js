'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CashClosings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pettyCashAmount: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      realBalance: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      virtualBalance: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      difference: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      openedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
      branchId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          isInt: true
        },
        references: {
          model: 'Branches',
          key: 'id',
          as: 'branchId'
        }
      },
      employeeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          isInt: true
        },
        references: {
          model: 'Employees',
          key: 'id',
          as: 'employeeId'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CashClosings');
  }
};