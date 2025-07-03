const express = require('express')
const chatController = require('../controller/chatController')

const chatRouter = express.Router()

chatRouter.post('/getres', chatController)

module.exports = chatRouter