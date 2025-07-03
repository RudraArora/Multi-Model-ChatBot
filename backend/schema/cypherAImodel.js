const { default: mongoose } = require("mongoose");

const cypherchat = new mongoose.Schema({
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

const cypherCHAT = mongoose.model('cypherCHAT', cypherchat)
module.exports=cypherCHAT