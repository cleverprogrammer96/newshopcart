const Sequelize = require('sequelize');
const database = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname+'/../Database/ShooppingCartDB.db'
  });
module.exports={
    database,Sequelize
}