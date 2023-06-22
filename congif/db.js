const Sequelize = require('sequelize');


const database = new Sequelize('books', 'user', 'pass',{
  host: 'localhost',
  dialect: 'sqlite'
})


module.exports = database;