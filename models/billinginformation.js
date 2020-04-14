'use strict';
module.exports = (sequelize, DataTypes) => {
  const BillingInformation = sequelize.define('BillingInformation', {
    identifier: DataTypes.STRING,
    businessName: DataTypes.STRING,
    email: DataTypes.STRING,
    altEmail: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    addressLine1: DataTypes.STRING,
    addressLine2: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
  	paranoid: true
  });
  BillingInformation.associate = function(models) {
    BillingInformation.belongsTo(models.Country,{
      foreignKey: 'countryId'
    });
    BillingInformation.belongsTo(models.State,{
      foreignKey: 'stateId'
    });
  };
  return BillingInformation;
};