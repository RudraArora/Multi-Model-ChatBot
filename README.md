# 🤖 Multi-Model ChatBot

### A full-stack conversational AI chatbot application supporting multiple language models such as MistralAI and CypherAI. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this project enables real-time interaction with different AI engines via a unified frontend interface.

## 🔗 Live Demo

- Try it out: https://multi-model-chatbot.netlify.app/

## ✨ Features

- 🧠 Multi-Model Chat Support: Integrates MistralAI and CypherAI models.

- 💬 Conversation UI: React-based responsive chat interface.

- 📦 REST API: Routes for sending and storing user-chat model interactions.

- 🧾 MongoDB Integration: Persists conversations with schemas per model.

- ⚙️ Modular Architecture: Clean separation of controllers, routes, and model schemas.

## 🧰 Tech Stack

- Frontend	React.js, Vite, CSS
- Backend	Node.js, Express.js
- Database	MongoDB, Mongoose
- AI Models	Gemini, MistralAI, CypherAI


## 🚀 Getting Started

### 1. Clone the Repository

- git clone https://github.com/your-username/Multi-Model-ChatBot.git
- cd Multi-Model-ChatBot
  
### 2. Backend Setup

- cd backend
- npm install
- Set up your .env file if needed (based on how external APIs are integrated), then:
- npm start
  
### 3. Frontend Setup

- cd ../frontend
- npm install
- npm run dev
- Visit the frontend at: http://localhost:5173

## 📌 Notable Components

- chatController.js: Handles model-specific chat logic.

- chatRoutes.js: Defines REST endpoints for chat interactions.

- chatModel.js, cypherAImodel.js, mistralAImodel.js: Mongoose schemas for storing chat logs.

- frontend/src/components/: Houses UI components for user input and message display.

