import React, { useState } from "react";
import axios from "axios";
import "./ChatBot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSend = async () => {
    if (!userInput.trim()) return;

    // Add user message to the chat
    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");

    try {
      // Send message to back-end
      const response = await axios.post("http://localhost:8000/chat", {
        message: userInput,
      });

      // Log the response to see what the bot replied
      console.log("Bot response:", response.data);

      // Add bot's response
      setMessages([...newMessages, { sender: "bot", text: response.data.reply }]);
    } catch (error) {
      console.error("Error communicating with the bot:", error);
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
