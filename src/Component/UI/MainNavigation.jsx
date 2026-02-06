import React from 'react';
import { Link } from 'react-router-dom';
// Remplace le chemin ci-dessous par le vrai chemin de ton logo
import logoImg from '../../assets/photos/Logo-kayombo.jpg'; 


function MainNavigation() {
  return (
    <header className="nav-wrapper">
      <nav className="pill-navbar container">
        {/* Logo / Nom */}
        <div className="nav-logo">
          <div className="logo-circle">
            {/* On remplace KB par la balise img */}
            <img src={logoImg} alt="KAYOMBO STUDIO Logo" className="nav-logo-img" />
          </div>
          <span className="logo-text">KAYOMBO STUDIO</span>
        </div>

        {/* Liens de navigation */}
        <ul className="nav-links">
          <li><Link to="/">home</Link></li>
          <li><Link to="/service">services</Link></li>
          <li><Link to="/portefolio">portfolio</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>

        {/* Bouton d'action */}
        <div className="nav-action">
          <Link to="/contact" className="btn-talk">let's talk</Link>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;