const route = require('express').Router()
const isBook = require('../model/is.mode')

route.get('/get-Inventory-System-books', (req, res) =>{
    isBook.find({}, (err, result) =>{
         if(err){
             res.send(err)
         } else{
             res.send(result)
         }
    })
})

route.post('/add-Inventory-System', (req, res) =>{
   const book = new isBook({
       quantity: req.body.quantity,
       title: req.body.title,
       author: req.body.author,
       price: req.body.price
   })

   book.save();
   try{

       res.redirect('http://localhost:3000/index.html')
   }catch(err){

       res.json({message: err}).status(500)
   }
})

module.exports = route