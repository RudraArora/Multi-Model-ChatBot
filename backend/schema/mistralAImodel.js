const { default: mongoose } = require("mongoose");

const mistralchat = new mongoose.Schema({
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

const mistralCHAT = mongoose.model('mistralCHAT', mistralchat)
module.exports=mistralCHAT