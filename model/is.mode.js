const mongoose = require('mongoose')

const isSchema = new mongoose.Schema({
    quantity: { 
          type:Number,
        },
    title: String,
    author: String,
    price: Number

})



module.exports = new mongoose.model('BookInventorySystem', isSchema)