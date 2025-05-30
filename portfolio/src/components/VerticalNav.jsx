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
        <a href="#timeline" className="nav-link">Experiences</a>
      </div>
    </div>
  );
};

export default VerticalNav; 