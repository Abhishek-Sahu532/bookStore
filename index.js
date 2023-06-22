const express = require('express');
const app = express();
const books = require('./router/books')


const PORT = 4000;

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/v1', books)

app.listen(PORT, ()=>{
  console.log('App is running on port ', PORT)
})
