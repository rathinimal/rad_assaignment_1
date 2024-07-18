// src/components/Home.js
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import '../App.css';
import './Home.css';
import { useTheme } from '../contexts/ThemeContext';



const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to our website!');
  const { theme } = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  useEffect(() => {
    const timeOfDay = new Date().getHours();
    if (timeOfDay < 12) {
      setWelcomeMessage('Good Morning!');
    } else if (timeOfDay < 18) {
      setWelcomeMessage('Good Afternoon!');
    } else {
      setWelcomeMessage('Good Evening!');
    }
  }, [nameSubmitted, inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = () => {
    setNameSubmitted(true);
  };

  return (
    <>
      {!nameSubmitted ? (
        <div className="name"style={{
          backgroundColor: theme === 'light' ? 'rgba(215, 224, 232, 0.768)' : '#121212',
          color: theme === 'light' ? '#000000' : '#ffffff',
        }}>
          <h1>Enter your name</h1>
          <input
            style={{ borderRadius: 10 }}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
          <Button variant="contained" color="primary" onClick={handleFormSubmit}>
            Submit
          </Button>
        </div>
      ) : (
        <div
          className="wel"
          style={{
            backgroundColor: theme === 'light' ? 'rgba(215, 224, 232, 0.768)' : '#121212',
            color: theme === 'light' ? '#000000' : '#ffffff',
          }}
        >
          <h1>{welcomeMessage} {inputValue}</h1>
          <p>Welcome to a world where moments transform into lasting memories. We capture your essence through stunning photography.</p>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </div>
      )}
    </>
  );
};

export default Home;
