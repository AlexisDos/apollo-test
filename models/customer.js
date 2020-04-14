'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING
  }, {
  	paranoid: false
  });
  Customer.associate = function(models) {
    Customer.belongsTo(models.Branch,{
      foreignKey: 'branchId'
    });
    Customer.belongsTo(models.BillingInformation,{
      foreignKey: 'billingInformationId'
    });
    Customer.hasMany(models.Sale,{
      foreignKey: 'customerId'
    });
    Customer.hasMany(models.CustomerAddress,{
      foreignKey: 'customerId'
    });
  };
  return Customer;
};