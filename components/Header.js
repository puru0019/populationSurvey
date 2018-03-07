import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/age">Age</NavLink></li>
      <li><NavLink to="/gender">Gender</NavLink></li>
      <li><NavLink to="/race">Race</NavLink></li>
      <li><NavLink to="/income">Income</NavLink></li>
      <li><NavLink to="/dashboard">Dash Board</NavLink></li>
    </ul>    
  </header>
);

export default Header;