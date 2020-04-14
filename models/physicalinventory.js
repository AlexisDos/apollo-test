'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhysicalInventory = sequelize.define('PhysicalInventory', {
    serial: DataTypes.INTEGER,
    folio: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
  	paranoid: true
  });
  PhysicalInventory.associate = function(models) {
    PhysicalInventory.belongsTo(models.Branch,{
      foreignKey: 'branchId'
    });
    PhysicalInventory.belongsTo(models.Employee,{
      foreignKey: 'employeeId'
    });
    PhysicalInventory.hasMany(models.InventoryControl,{
      foreignKey: 'physicalInventoryId'
    });
  };
  return PhysicalInventory;
};