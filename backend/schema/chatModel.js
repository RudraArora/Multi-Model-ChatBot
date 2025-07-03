const { default: mongoose } = require("mongoose");

const chat = new mongoose.Schema({
    userMessage:{
        type:String,
        required:true
    },
    aiResponse:{
        type:String,
        required:true
    },
    createdAt: { type: Date, default: Date.now }
})

const CHAT = mongoose.model('CHAT', chat)
module.exports=CHAT