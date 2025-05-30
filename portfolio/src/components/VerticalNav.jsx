import React from 'react';
import './VerticalNav.css';

const VerticalNav = () => {
  return (
    <div className="vertical-nav">
      <div className="logo">
        <h2>Amelia Li</h2>
      </div>
      <div className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#experiences" className="nav-link">Experiences</a>
        <a href="https://notes.ameliali.com/" target="_blank" className="nav-link">Notes</a>
      </div>
    </div>
  );
};

export default VerticalNav; 