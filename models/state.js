'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
  	paranoid: true
  });
  State.associate = function(models) {
    State.belongsTo(models.Country,{
      foreignKey: 'countryId'
    });
    State.hasMany(models.CustomerAddress,{
      foreignKey: 'stateId'
    });
    State.hasMany(models.BillingInformation,{
      foreignKey: 'stateId'
    });
  };
  return State;
};