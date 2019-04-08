const Sequelize = require('sequelize');
const database = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname+'/../Database/MyShoppingCartDB.db'
  });
module.exports={
    database,Sequelize
}