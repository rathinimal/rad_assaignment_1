// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import GlobalStyles from './styles/globalStyles';
import './App.css';


const App = () => {
  return (
    <ThemeProvider>
      <div className="body" style={{ padding: '20px' }}>
      <Router>
        <GlobalStyles />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About/*" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        
      </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
