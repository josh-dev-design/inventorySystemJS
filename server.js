const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.raw())

app.use(express.static('public'))

mongoose.connect(process.env.CONNECT_DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


const inventorysystem = require('./routes/is')
app.use('/', inventorysystem)

app.listen(3000, () => console.log("Hello, server is running at http://localhost:3000"))