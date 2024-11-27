import React from "react";
import logo from './logo.svg';
import "./ChatBot.css";
import ChatBot from "./ChatBot";

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome to my CV-Bot</h1>
        <p style={styles.description}>
          Hi, I'm Guilherme Marcon, a passionate AI enthusiast with a focus on sentiment analysis, machine learning, and generative AI. Feel free to ask my bot about my skills, projects, or any AI-related topics! 
        </p>
        <p style={styles.description}>
          Note that even using RAG, I can't 100% garantee the bot is telling the truth. Any questions feel free to e-mail me at guilherme.santos.marcon@alumni.usp.br!
        </p>
      </div>
      <ChatBot />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "95vh",
    backgroundColor: "#f4f4f9",
    padding: "0px",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: "1.05rem",
    color: "#555",
    maxWidth: "90vw",
    lineHeight: "1.5",
  },
};

export default App;
