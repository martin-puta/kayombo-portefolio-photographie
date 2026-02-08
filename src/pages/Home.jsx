import React from 'react';
import '../pages/styles/Home.css';
import imgProfil from '../assets/photos/IMG-20260122-WA0629-removebg-preview.png';

function Home() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <span className="label-name">KAYOMBO BERNARD</span>
        <h1 className="hero-title">
          HAY! I'M <span className="highlight-white">KAYOMBO</span>
        </h1>
        <h2 className="hero-subtitle">
          I'M A <span className="highlight-blue">DESIGNER & PHOTOGRAPHER</span><span className="cursor">|</span>
        </h2>
        
        <p className="hero-description">
          Capturing moments, elevating visuals, and crafting unique digital experiences. 
          Specialized in portrait photography, cinematography, and modern graphic design 
          to bring your vision to life.
        </p>

        <div className="hero-actions">
          <button className="btn-touch">GET IN TOUCH →</button>
          <div className="social-links">
            <a href="#" className="social-icon">fb</a>
            <a href="#" className="social-icon">ig</a>
            <a href="#" className="social-icon">li</a>
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="circle-bg"></div>
        <div className="sphere sphere-1"></div>
        <div className="sphere sphere-2"></div>
        <img 
          src={imgProfil} 
          alt="Kayombo Bernard" 
          className="profile-img" 
        />
      </div>
      
    </section>
    
  );
}

export default Home;