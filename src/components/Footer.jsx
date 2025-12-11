import React from "react";
import FooterLogoO from "./HeaderLogoO";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="brand">
        <span className="Footerlogo-text">D{FooterLogoO}wn NEPA!</span>
        <div className="footer-subtitle">Nigeria Power Tracker App</div>
      </div>

      <nav className="footer-links">
        <a href="#/about">About</a>
        <a href="#/feedback">Feedback</a>
        <a href="#/contact">Contact</a>
      </nav>

      <div className="meta">
        <div className="credits">© {new Date().getFullYear()} Dawn NEPA</div>
        <div className="footer-subtitle">Author: <strong>Jare</strong></div>
      </div>
    </footer>
  );
}

export default Footer;