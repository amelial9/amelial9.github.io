import React from 'react';
import VerticalNav from './VerticalNav';
import './Research.css';
import catsPhone from '../assets/cats_phone.jpg';
import catsDesktop from '../assets/cats_desktop.jpg';

const Research = () => {
  return (
    <>
      <VerticalNav />
      <div className="research-hero">
        <div className="research-hero-image">
          <img src={catsPhone} alt="Cute cats" className="cats-phone" />
          <img src={catsDesktop} alt="Cute cats" className="cats-desktop" />
          <div className="research-hero-overlay">
            <h1 className="research-hero-title">Research Work</h1>
          </div>
        </div>
      </div>
      <div className="research-main-content">
        <div className="research-section">
          <div className="research-header">
            <h2 className="research-role">Research Assistant</h2>
            <p className="research-lab">
              @ <a href="https://goldenneurolab.com/" target="_blank" rel="noopener noreferrer" className="research-link">Golden Lab</a>
            </p>
          </div>
          <div className="research-content">
            {/* Content can be added here later */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
