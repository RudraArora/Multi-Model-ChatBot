

const { GoogleGenAI } = require('@google/genai')
const CHAT = require('../schema/chatModel')
const {OpenAI} = require('openai');
const mistralCHAT = require('../schema/mistralAImodel');
const cypherCHAT = require('../schema/cypherAImodel');
require('dotenv').config()

console.log(process.env.OPENROUTER_API_KEY)
const ai = new GoogleGenAI({})
const client = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1"
  
})
// console.log(client)

const chatController = async(req,res) => {
    const {message,model} = req.body

    if (model.startsWith('gemini')) {
        const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: message
        });
        const aiText=response.text

        const chat = new CHAT({
            userMessage:message, aiResponse:aiText
        })

        await chat.save()

        return res.status(200).json({message:'response Fetched Successfull', status:200, success: true, aiText})
    }
    if (model.startsWith('mistral')) {
        const completion = await client.chat.completions.create({
        model: "mistralai/mistral-small-3.2-24b-instruct:free",
        messages: [
            { role: "user", content: message }
        ]
        });
        const aiText=completion.choices[0].message.content

        const mistralchat = new mistralCHAT({
            userMessage:message, aiResponse:aiText
        })

        await mistralchat.save()

        return res.status(200).json({message:'response Fetched Successfull', status:200, success: true, aiText})
    }
    else {
    // <-- fixed this block:
        const completion = await client.chat.completions.create({
        model: "openrouter/cypher-alpha:free",
        messages: [
            { role: "user", content: message }
        ]
        });

        const aiText=completion.choices[0].message.content

        const cypherchat = new cypherCHAT({
            userMessage:message, aiResponse:aiText
        })

        await cypherchat.save()

        return res.status(200).json({message:'response Fetched Successfull', status:200, success: true, aiText})
  }

}

module.exports = chatController