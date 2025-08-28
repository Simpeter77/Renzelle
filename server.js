const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()

app.use(express.json())

dotenv.config()
const uri = process.env.MONGO_URI
const port = process.env.PORT || 5000


//db
if(uri){
    mongoose.connect(uri)
        .then(() => {
            console.log("Connected to MongoDB")
            app.listen(port, () => {
                console.log(`Server running on port ${port}`)
            })
        })
        .catch((err) => console.error("MongoDB connection error:", err))
}
//render on ejs
app.set('view engine', 'ejs')
app.use(express.static('public'));

//for index
const indexRoute = require('./routes/index.js')
app.use("/", indexRoute)