import React, { useState } from "react";
import logo from './google_PNG19625.png';
import email from './email.png';
import user from './signin.png';
import './App.css';
import meepmerp from './meepmerp.wav';

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const playAudio = () => {
    const audio = new Audio(meepmerp); // Create a new audio object
    audio.play(); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <div className="search-container">
          <input
            type="text"
            id="searchBox"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>

        <button className="search-button" onClick={() => { playAudio(); }}>
          Google Search
        </button>

        <button className="lucky-button" onClick={() => { playAudio(); }}>
          I'm Feeling Lucky
        </button>

        <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
          <img src={email} className="App-email" alt="email" style={{ marginLeft: '20px' }} />
        </a>
        <a href="https://accounts.google.com" target="_blank" rel="noopener noreferrer">
          <img src={user} className="App-user" alt="sign in" style={{ marginLeft: '20px' }} />
        </a>
      </header>
    </div>
  );
}

export default App;