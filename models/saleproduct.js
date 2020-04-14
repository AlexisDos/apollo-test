'use strict';
module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    quantity: DataTypes.DECIMAL,
    discount: DataTypes.DECIMAL,
    unitPrice: DataTypes.DECIMAL
  }, {
  	paranoid: true
  });
  SaleProduct.associate = function(models) {
    SaleProduct.belongsTo(models.Sale,{
      foreignKey: 'saleId'
    });
    SaleProduct.belongsTo(models.Product,{
      foreignKey: 'productId'
    });
  };
  return SaleProduct;
};