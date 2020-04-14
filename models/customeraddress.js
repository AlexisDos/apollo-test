'use strict';
module.exports = (sequelize, DataTypes) => {
  const CustomerAddress = sequelize.define('CustomerAddress', {
    addressLine1: DataTypes.STRING,
    addressLine2: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    reference: DataTypes.STRING
  }, {
  	paranoid: false
  });
  CustomerAddress.associate = function(models) {
    CustomerAddress.belongsTo(models.Customer,{
      foreignKey: 'customerId'
    });
    CustomerAddress.belongsTo(models.State,{
      foreignKey: 'stateId'
    });
    CustomerAddress.belongsTo(models.Country,{
      foreignKey: 'countryId'
    });
  };
  return CustomerAddress;
};