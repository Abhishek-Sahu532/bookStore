const express = require('express');
const router = express.Router()
const books = require('../Models/bookModels')


router.get('/books', async (req, res) => {
  try {
    let a = await books.findAll();
    res.status(200).send(a)
  } catch (e) {
    return res.status(500).send(e)
  }
})



router.post('/books/add', async (req, res) => {
  try {

    const { name,
      author,
      genre,
      dateOfRelease,
      bookImage,
      rating,
      price } = req.body;

    if (!name || !author || !genre || !dateOfRelease || !bookImage || !rating || !price) {
      return res.status(400).json({
        err: 'Pls provide the details'
      })
    }

    let book = await books.create({

      name: name,
      author: author,
      genre: genre,
      dateOfRelease: dateOfRelease,
      bookImage: bookImage,
      rating: rating,
      price: price

    })
    // console.log(book)
    return res.status(201).send(book)
  } catch (e) {
    console.log(e)
    return res.status(500).send(e)
  }
})


router.get('/books/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let a = await books.findOne({
      where: {
        id: id
      }
    })
    if (!a) {
      return res.status(404).send()
    }
    return res.status(200).send(a)
  } catch (e) {
    return res.status(500).send()
  }
})

router.put('/books/:id', async (req, res)=>{
  try{
    let id = req.params.id;
    console.log('id.>>>>', id)
    let book = await books.findOne({where:{id: id}});
    // console.log('find books......', book)
    if(!book){
 return res.status(404).json({
        err: 'Book Not Found'
      })
    }

     const { name,
      author,
      genre,
      dateOfRelease,
      bookImage,
      rating,
      price } = req.body;

    await book.update({
      name: name,
      author: author,
      genre: genre,
      dateOfRelease: dateOfRelease,
      bookImage : bookImage,
      rating : rating,
      price : price
    })
    // console.log('updated book......',  book)
    return res.status(200).send(book)
  }catch(e){
    console.log('e>>>>>', e)
    return res.status(500).send(e)
  }
})


router.delete('/books/:id', async (req,res)=>{
 

  try{
     let id = req.params.id;
  let book = await books.findOne({where:{
    id: id
  }})
  if(!book){
    return res.status(404).json({
        err: 'Book Not Found'
      })
  }
    await book.destroy();
    return res.status(200).send()
  }catch(e){
   return res.status(500).send(e) 
  }
})

module.exports = router