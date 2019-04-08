const database = require(__dirname+'/../../Config/databaseConfig.js').database;
const Sequelize = require(__dirname+'/../../Config/databaseConfig.js').Sequelize;


  const Vendors = database.define('Vendor', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },  
  })

 

  module.exports = {
   Vendors
}
