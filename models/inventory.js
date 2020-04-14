'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    quantity: DataTypes.DECIMAL
  }, {
  	paranoid: true
  });
  Inventory.associate = function(models) {
    Inventory.belongsTo(models.Branch,{
      foreignKey: 'branchId'
    });
    Inventory.belongsTo(models.Product,{
      foreignKey: 'productId'
    });
    Inventory.hasMany(models.InventoryControl,{
      foreignKey: 'inventoryId'
    });
  };
  return Inventory;
};