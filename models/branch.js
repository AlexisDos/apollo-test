'use strict';
module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define('Branch', {
    name: DataTypes.STRING,
    prefix: DataTypes.STRING
  }, {
  	paranoid: true
  });
  Branch.associate = function(models) {
    Branch.hasMany(models.Employee,{
      foreignKey: 'branchId'
    });
    Branch.hasMany(models.Product,{
      foreignKey: 'branchId'
    });
    Branch.hasMany(models.Inventory,{
      foreignKey: 'branchId'
    });
    Branch.hasMany(models.InventoryControl,{
      foreignKey: 'branchId'
    });
    Branch.hasMany(models.PhysicalInventory,{
      foreignKey: 'branchId'
    });
    Branch.hasMany(models.Customer,{
      foreignKey: 'branchId'
    });
    Branch.hasMany(models.Sale,{
      foreignKey: 'branchId'
    });
    Branch.hasMany(models.CashClosing,{
      foreignKey: 'branchId'
    });
  };
  return Branch;
};