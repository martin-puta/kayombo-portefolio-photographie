import React from 'react';
import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <section className='top-txt'>
      <div className="head container">
        <div className="head-txt">
          <p>Livraison rapide avec possibilité de retour en 3 jours</p>
        </div>
        <div className="sing_in_up">
          <Link to="/login">Me CONNECTER</Link>
          <Link to="/register">M'inscrire</Link>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-container">
          <input type="checkbox" id="menu-toggle" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className='menu-items'>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/product">Nos produits</Link></li>
            <li><Link to="/logout">Me déconnecter</Link></li>
          </ul>
          <div className="logo">
            <div className="flex item-center gap-1">
              <input type="text" placeholder='Rechercher...' className='search-topbar-input' />
              <button className="btn-search">Rechercher</button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default MainNavigation;