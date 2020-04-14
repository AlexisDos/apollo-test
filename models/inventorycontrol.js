'use strict';
module.exports = (sequelize, DataTypes) => {
  const InventoryControl = sequelize.define('InventoryControl', {
    lastStock: DataTypes.DECIMAL,
    stock: DataTypes.DECIMAL,
    description: DataTypes.STRING
  }, {
  	paranoid: true
  });
  InventoryControl.associate = function(models) {
    InventoryControl.belongsTo(models.Branch,{
      foreignKey: 'branchId'
    });
    InventoryControl.belongsTo(models.Employee,{
      foreignKey: 'employeeId'
    });
    InventoryControl.belongsTo(models.Inventory,{
      foreignKey: 'inventoryId'
    });
    InventoryControl.belongsTo(models.PhysicalInventory,{
      foreignKey: 'physicalInventoryId'
    });
  };
  return InventoryControl;
};