const database = require(__dirname+'/../Config/databaseConfig.js').database;
const Sequelize = require(__dirname+'/../Config/databaseConfig.js').Sequelize;

console.log(database);
  const Vendors = database.define('Vendor', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },  
  })

 

  module.exports = {
   Vendors
}
