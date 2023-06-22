const {DataTypes} = require('sequelize');
const database = require('../congif/db')


const books = database.define('books',{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name:{
    type: DataTypes.STRING
  },
  author:{
    type: DataTypes.STRING
  },
   genre:{
    type: DataTypes.STRING
  },
   dateOfRelease:{
    type: DataTypes.STRING
  },
   bookImage:{
    type: DataTypes.STRING
  },
   rating:{
    type: DataTypes.INTEGER
  },
   price:{
    type: DataTypes.INTEGER
  }
})

books.sync();
module.exports = books;