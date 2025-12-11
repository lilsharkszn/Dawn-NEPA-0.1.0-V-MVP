import React from "react";
import "./SideMenu.css";
import Lightbulbs from "../assets/onoffbulb.jpeg";

function SideMenu({ open, onClose, navigate }) {
  const go = (hash) => {
    if (navigate) navigate(hash);
    if (onClose) onClose();
  };

  return (
    <>
    
      <div className={`menu-overlay ${open ? "open" : ""}`} onClick={onClose} />

      <aside className={`side-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="side-menu-inner">
          <button
            className="menu-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            ✕
          </button>

          <nav className="side-nav">
            <button className="side-link" onClick={() => go("#/")}>
              Home
            </button>
            <button className="side-link" onClick={() => go("#/status")}>
              Power Status
            </button>
            <button className="side-link" onClick={() => go("#/about")}>
              About
            </button>
          </nav>

          <div className="side-section">
            <h4>Links</h4>
            <button className="side-link" onClick={() => go("#/about")}>
              About
            </button>
            <button className="side-link" onClick={() => go("#/feedback")}>
              Feedback
            </button>
            <button className="side-link" onClick={() => go("#/contact")}>
              Contact
            </button>
          </div>
          <img className="lightbulbs" src={Lightbulbs} alt="lightbulbs" />
        </div> 
        
      </aside>
    </>
  );
}

export default SideMenu;
