const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()

app.use(express.json())

dotenv.config()
const port = process.env.PORT || 5000

//render on ejs
app.set('view engine', 'ejs')
app.use(express.static('public'));

//for index
const indexRoute = require('./routes/index.js')
app.use("/", indexRoute)