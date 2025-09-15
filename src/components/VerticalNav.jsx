import React, { useState } from 'react';
import './VerticalNav.css';
import portraitPic from '../assets/portrait.svg';

const VerticalNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="vertical-nav">
      <div className="logo">
        <h2>Amelia Li</h2>
      </div>
      
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={portraitPic} alt="menu" />
      </div>

      <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
        <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#experiences" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experiences</a>
        <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#education" className="nav-link" onClick={() => setIsMenuOpen(false)}>Education</a>
        <a href="https://notes.ameliali.com/" target="_blank" className="nav-link" onClick={() => setIsMenuOpen(false)}>Notes</a>
        <a href="https://ameli9.notion.site/amelia-23e5d09895ac8047a604fff42e6527d5" target="_blank" className="nav-link" onClick={() => setIsMenuOpen(false)}>/amelia</a>
      </div>
    </div>
  );
};

export default VerticalNav; 