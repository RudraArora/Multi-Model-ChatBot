import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function ChatBot() {
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);
  const [model,   setModel]   = useState('gemini-2.5-flash');

  const sendMessage = async () => {
    if (!message.trim()) return;
    setHistory(h => [...h, { from: 'user', text: message }]);
    try {
      const data  = await axios.post('http://localhost:3000/getres', { message, model });
      setHistory(h => [...h, { from: 'ai', text: data.data.aiText }]);
    } catch {
      setHistory(h => [...h, { from: 'ai', text: 'Error: could not reach server.' }]);
    }
    setMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-amber-100">🔮 Multi Model ChatBot</h1>

    <div className="mb-4">
    <label className="mr-2 font-medium text-white">Model:</label>
    <select
        className="border px-2 py-1 rounded bg-white"
        value={model}
        onChange={e => {setModel(e.target.value)
            setHistory([])
        }}>
        <optgroup label="Gemini">
        <option  value="gemini-2.5-flash">Gemini 2.5-Flash</option>
        </optgroup>
        <optgroup label="Mistral">
        <option value="mistral">Mistral Small</option>
        </optgroup>
        <optgroup label="Cypher">
        <option value="cypher">Cypher Alpha</option>
        </optgroup>
    </select>
    </div>

      <div className="border border-gray-300 rounded-lg p-4 h-140 overflow-y-auto bg-white shadow-sm ">
        {history.length === 0 && (
          <p className="text-gray-500 italic">Start the conversation below…</p>
        )}
        {history.map((msg, i) => (
          <div
            key={i}
            className={`flex mb-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`
                max-w-[80%] 
                px-4 py-2 
                rounded-lg 
                ${msg.from === 'user' 
                  ? 'bg-blue-100 text-blue-900 rounded-br-none' 
                  : 'bg-gray-100 text-gray-900 rounded-bl-none'}
              `}
            >
              <span className="font-semibold">
                {msg.from === 'user' ? 'You:' : 'Bot:'}
              </span>{' '}
            <ReactMarkdown>{msg.text}</ReactMarkdown>  
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          className="
            flex-1 
            border border-gray-300 
            rounded-lg 
            px-4 py-2 
            bg-amber-50
            focus:outline-none 
            focus:ring-2 focus:ring-blue-300
          "
        />
        <button
          onClick={sendMessage}
          className="
            bg-blue-500 
            hover:bg-blue-600 
            text-white 
            font-semibold 
            px-5 py-2 
            rounded-lg 
            focus:outline-none 
            focus:ring-2 focus:ring-blue-300
          "
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBot
