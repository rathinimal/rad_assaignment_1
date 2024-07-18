// src/components/About.js
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import '../App.css'
import Toolbar from '@mui/material/Toolbar';
import History from "./History";
import Team from "./Team";
import Values from "./Values";
import "./About.css";
import { useTheme } from '../contexts/ThemeContext';


const About = () => {
  const { theme } = useTheme();
  return (
    <div className='about'
    style={{
      backgroundColor: theme === 'light' ? 'rgba(215, 224, 232, 0.768)' : '#121212',
      color: theme === 'light' ? '#000000' : '#ffffff',
    }}>
      <h1>About Us</h1>
      <Toolbar>
      <nav>
        <NavLink to="history" activeClassName="active"></NavLink> 
        <NavLink to="team" activeClassName="active"><h2>Team</h2></NavLink>
        <NavLink to="values" activeClassName="active"><h2>Values</h2></NavLink>
      </nav>
      </Toolbar>
      <Routes>
        <Route path="history" element={<History />} />
        <Route path="team" element={<Team />} />
        <Route path="values" element={<Values />} />
      </Routes>
    </div>
  );
};

export default About;
