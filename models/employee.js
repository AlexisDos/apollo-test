'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    localUser: DataTypes.STRING,
    localPassword: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.INTEGER,
    phone: DataTypes.STRING
  }, {
  	paranoid: true
  });
  Employee.associate = function(models) {
    Employee.belongsTo(models.Branch,{
      foreignKey: 'branchId'
    });
    Employee.hasMany(models.InventoryControl,{
      foreignKey: 'employeeId'
    });
    Employee.hasMany(models.Sale,{
      foreignKey: 'sellerId'
    });
    Employee.hasMany(models.Sale,{
      foreignKey: 'cashierId'
    });
    Employee.hasMany(models.Sale,{
      foreignKey: 'deliveryManId'
    });
    Employee.hasMany(models.CashClosing,{
      foreignKey: 'employeeId'
    });
    Employee.hasMany(models.PhysicalInventory,{
      foreignKey: 'employeeId'
    });
  };
  Employee.prototype.validPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
  };
  Employee.addHook("beforeValidate", async (employee) => {
    if(employee.localPassword){  
      const salt = await bcrypt.genSalt(10);
      employee.localPassword = await bcrypt.hash(employee.localPassword, salt);
    }
  });
  return Employee;
};