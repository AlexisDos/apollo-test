'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    type: DataTypes.INTEGER
  }, {
  	paranoid: true
  });
  Product.associate = function(models) {
    Product.belongsTo(models.Branch,{
      foreignKey: 'branchId'
    });
    Product.hasMany(models.Inventory,{
      foreignKey: 'productId'
    });
    Product.hasMany(models.SaleProduct,{
      foreignKey: 'productId'
    });
  };
  return Product;
};