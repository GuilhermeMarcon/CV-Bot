import React, { useState } from "react";
import axios from "axios";
import "./ChatBot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleSend = async () => {
    if (!userInput.trim()) return;

    // Add user message to the chat
    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");
    setLoading(true); // Start loading

    try {
      // Send message to back-end
      const response = await axios.post("https://cv-bot-back.onrender.com/chat", {
        message: userInput,
      });

      // Add bot's response
      setMessages([...newMessages, { sender: "bot", text: response.data.reply }]);
    } catch (error) {
      console.error("Error communicating with the bot:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "user-message" : "bot-message"}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="loading-indicator">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={handleKeyDown}  // Trigger on Enter key press
          autoFocus
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
