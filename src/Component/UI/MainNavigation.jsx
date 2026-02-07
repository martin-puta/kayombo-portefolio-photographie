import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/photos/Logo-kayombo.jpg'; 

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="nav-wrapper">
      <nav className="pill-navbar container">
        
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="nav-logo">
          <div className="logo-circle">
            <img src={logoImg} alt="KAYOMBO STUDIO Logo" className="nav-logo-img" />
          </div>
          <span className="logo-text">KAYOMBO STUDIO</span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>home</Link></li>
          <li><Link to="/service" onClick={toggleMenu}>services</Link></li>
          <li><Link to="/portefolio" onClick={toggleMenu}>portfolio</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>about</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>contact</Link></li>
        </ul>

        <div className="nav-action">
          <Link to="/contact" className="btn-talk">let's talk</Link>
        </div>
      </nav>

      
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </header>
  );
}

export default MainNavigation;