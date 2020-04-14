'use strict';
module.exports = (sequelize, DataTypes) => {
  const CashClosing = sequelize.define('CashClosing', {
    pettyCashAmount: DataTypes.DECIMAL,
    realBalance: DataTypes.DECIMAL,
    virtualBalance: DataTypes.DECIMAL,
    difference: DataTypes.DECIMAL,
    openedAt: DataTypes.DATE
  }, {
  	paranoid: true
  });
  CashClosing.associate = function(models) {
    CashClosing.belongsTo(models.Branch,{
      foreignKey: 'branchId'
    });
    CashClosing.belongsTo(models.Employee,{
      foreignKey: 'employeeId'
    });
  };
  return CashClosing;
};