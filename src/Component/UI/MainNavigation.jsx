import React, { useState } from 'react';
// On remplace Link par NavLink
import { NavLink, Link } from 'react-router-dom'; 
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

        {/* Utilisation de NavLink ici */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" onClick={toggleMenu}>home</NavLink></li>
          <li><NavLink to="/service" onClick={toggleMenu}>services</NavLink></li>
          <li><NavLink to="/portefolio" onClick={toggleMenu}>portfolio</NavLink></li>
          <li><NavLink to="/about" onClick={toggleMenu}>about</NavLink></li>
          <li><NavLink to="/contact" onClick={toggleMenu}>contact</NavLink></li>
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