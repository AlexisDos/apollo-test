'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
  	paranoid: true
  });
  Country.associate = function(models) {
    Customer.hasMany(models.State, {
      foreignKey: 'countryId'
    });
    Customer.hasMany(models.CustomerAddress, {
      foreignKey: 'countryId'
    });
    Customer.hasMany(models.BillingInformation, {
      foreignKey: 'countryId'
    });
  };
  return Country;
};