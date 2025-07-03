
const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const chatRouter = require('./routes/chatRoutes')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT||3001
const MONGO_URL = process.env.MONGODB_URL

try {
    mongoose.connect(MONGO_URL)
    console.log('DB is connected') 
} catch (err){
    console.log(err)
}



app.use(cors())
app.use(express.json())
app.use(chatRouter)

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})
