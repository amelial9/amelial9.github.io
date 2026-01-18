import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './VerticalNav.css';
import portraitPic from '../assets/portrait.svg';

const VerticalNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Menu clicked, current state:', isMenuOpen);
    setIsMenuOpen(prev => {
      const newState = !prev;
      console.log('Menu state changed to:', newState);
      // Force nav to be visible when menu opens
      if (newState) {
        setIsVisible(true);
      }
      return newState;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Keep nav visible if menu is open
      if (isMenuOpen) {
        setIsVisible(true);
        return;
      }
      
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        // Show nav at the top of the page (increased threshold)
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide nav (only after scrolling past 100px)
        setIsVisible(false);
      } else {
        // Scrolling up - show nav
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <nav className={`horizontal-nav ${isVisible ? 'nav-visible' : 'nav-hidden'}`}>
      <div className="nav-brand">
        <h2>Amelia Li</h2>
      </div>
      
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={portraitPic} alt="menu" />
      </div>

      <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
        {/* <Link to="/research" className="nav-link" onClick={() => setIsMenuOpen(false)}>Research</Link> */}
        <a href="https://notes.ameliali.com/" target="_blank" className="nav-link" onClick={() => setIsMenuOpen(false)}>Notes</a>
        <a href="https://ameli9.notion.site/amelia-23e5d09895ac8047a604fff42e6527d5" target="_blank" className="nav-link" onClick={() => setIsMenuOpen(false)}>/amelia</a>
      </div>
    </nav>
  );
};

export default VerticalNav; 