// src/components/NavBar.js
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import styled from 'styled-components';
import Clock from './Clock';
import logo from "./images/logo.png";

const Nav = styled.nav`
  a {
    color: inherit;
    text-decoration: none;
    margin-right: 1rem;
  }
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppBar position="fixed" sx={{
      backgroundColor: theme === 'light' ? '#2196f3' : '#121212',
    }}>
      <Toolbar>
        <Logo src={logo} alt="Company Logo" />
        <Nav>
          <NavLink to="/" exact activeClassName="active">
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            <Button color="inherit">About</Button>
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            <Button color="inherit">Contact Us</Button>
          </NavLink>
        </Nav>
        <IconButton color="inherit" onClick={toggleTheme}>
          {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <Clock />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
