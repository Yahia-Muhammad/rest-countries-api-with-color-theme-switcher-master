import React from "react";
import { useContext } from 'react';
import ThemeProvider from '../../config/Theme';
import './Header.css';

const Header = () => {
  const { changeTheme } = useContext(ThemeProvider);
  return (
    <header>
      <div>
        <h2>Where in the world</h2>
        <button className="toggle-theme pointer" onClick={() => {changeTheme()}}><span className="icon-moon-o"></span>Dark Mode</button>
      </div>
    </header>
  );
};

export default Header;
