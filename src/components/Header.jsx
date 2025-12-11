import React from "react";
import menuIcon from '../assets/menu-2-line.png';
import headerLogoO from "./HeaderLogoO";
import { IconSun, IconMoon } from './Icons';
import  './Header.css';


function Header({ onToggleMenu, menuOpen, theme = 'light', onToggleTheme }) {
  const isDark = theme === 'dark';
  return (
    <header className="header">
      <h1 className="logo-text">
  D<span className="logo-flickerr">{headerLogoO}</span>wn NEPA!
</h1>

      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <button className={`darkmode-btn`} onClick={onToggleTheme} aria-pressed={isDark} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
          {isDark ? <IconSun /> : <IconMoon />}
        </button>

        <button className={`menutoggle ${menuOpen ? 'open' : ''}`} onClick={onToggleMenu} aria-expanded={menuOpen} aria-label="Toggle menu">
          <img src={menuIcon} alt="Menu" />
        </button>
      </div>
    </header>
  );
}

export default Header;


