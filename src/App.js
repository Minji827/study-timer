// src/App.js

import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header className="App-header">
        <div className="mode-toggle">
          <input
            type="checkbox"
            id="mode-switch"
            checked={darkMode}
            onChange={toggleMode}
          />
          <label htmlFor="mode-switch" className="mode-switch-label">
            <span className="mode-switch-inner">
              <span className="icon sun-icon">☀️</span>
              <span className="icon moon-icon">🌙</span>
            </span>
            <span className="mode-switch-switch"></span>
          </label>
        </div>
        <Timer />
      </header>
    </div>
  );
}

export default App;
