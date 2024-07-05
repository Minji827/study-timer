// src/Timer.js

import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="timer-container">
      <h1>Study Timer</h1>
      <div className="time-display">
        <h2>{`${Math.floor(time / 3600)}:${Math.floor((time % 3600) / 60)}:${
          time % 60
        }`}</h2>
      </div>
      <div className="button-container">
        <button className="timer-button" onClick={handleStart}>
          Start
        </button>
        <button className="timer-button" onClick={handleStop}>
          Stop
        </button>
        <button className="timer-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
