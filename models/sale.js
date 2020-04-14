'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    type: DataTypes.INTEGER,
    service: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    serial: DataTypes.INTEGER,
    folio: DataTypes.STRING,
    description: DataTypes.STRING,
    action: DataTypes.INTEGER,
    discount: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL
  }, {
  	paranoid: true
  });
  Sale.associate = function(models) {
  	Sale.belongsTo(models.Branch,{
      foreignKey: 'branchId'
    });
    Sale.belongsTo(models.Customer,{
      foreignKey: 'customerId'
    });
    Sale.belongsTo(models.Employee,{
      as: 'seller', foreignKey: 'sellerId'
    });
    Sale.belongsTo(models.Employee,{
      as: 'cashier', foreignKey: 'cashierId'
    });
    Sale.belongsTo(models.Employee,{
      as: 'deliveryMan', foreignKey: 'deliveryManId'
    });
    Sale.hasMany(models.SaleProduct,{
      foreignKey: 'saleId'
    });
  };
  return Sale;
};