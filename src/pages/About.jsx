import React from 'react';
import '../pages/styles/About.css'
import { CameraIcon, VideoCameraIcon, PaintBrushIcon, SparklesIcon } from '@heroicons/react/24/outline';
import ImageKayombo from '../assets/photos/Logo-kayombo.jpg'

const About = () => {
  return (
    <div className="ks-about-wrapper">
      
      {/* SECTION HERO */}
      <section className="ks-hero-container">
        <div className="ks-hero-main-content">
          <h4 className="ks-hero-subtitle">Toowoomba, QLD</h4>
          <h1 className="ks-hero-heading">KAYOMBO <span className="ks-brand-accent">STUDIOS</span></h1>
          <p className="ks-hero-text">
            Photographie • Vidéographie • Montage • Design Créatif. 
            Capturer des moments réels, créer des souvenirs éternels.
          </p>
          <button className="ks-contact-trigger">
            ME CONTACTER
          </button>
        </div>
        
        <div className="ks-hero-visual-layer">
           <img src={ImageKayombo} alt="Kayombo Studios Logo" className="ks-hero-img" />
        </div>
      </section>

      {/* SECTION QUI SUIS-JE */}
      <section className="ks-bio-section">
        <div className="ks-bio-layout">
          <div className="ks-bio-description">
            <h2 className="ks-bio-title">L'Histoire derrière l'objectif</h2>
            <p className="ks-bio-paragraph">
              Je m'appelle <strong>Bernard</strong>. Mon voyage créatif a commencé il y a deux ans. 
              Ce qui n'était qu'une simple curiosité est devenu une passion dévorante pour l'excellence visuelle.
            </p>
            <p className="ks-bio-paragraph">
              Aujourd'hui, Kayombo Studios est le fruit de cette discipline. Je ne me contente pas de prendre des photos ; 
              j'aide les gens à se sentir confiants et les entreprises à communiquer avec impact.
            </p>
          </div>
          
          <div className="ks-stats-container">
            <div className="ks-stat-item">
              <span className="ks-stat-value">2+</span>
              <p className="ks-stat-desc">Années d'expérience</p>
            </div>
            <div className="ks-stat-item">
              <span className="ks-stat-value">100%</span>
              <p className="ks-stat-desc">Engagement & Intégrité</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES */}
      <section className="ks-offerings-section">
        <h2 className="ks-offerings-main-title">Mes Services</h2>
        <div className="ks-offerings-grid">
          
          <ServiceCard 
            Icon={<CameraIcon />} 
            title="Photographie" 
            desc="Portraits, Mariages, Événements et Lifestyle." 
          />
          <ServiceCard 
            Icon={<VideoCameraIcon />} 
            title="Vidéographie" 
            desc="Publicités, Reels Instagram et Storytelling." 
          />
          <ServiceCard 
            Icon={<SparklesIcon />} 
            title="Retouche" 
            desc="Colorimétrie cinématique et édition avancée." 
          />
          <ServiceCard 
            Icon={<PaintBrushIcon />} 
            title="Branding" 
            desc="Création de logos et identités visuelles." 
          />
          
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ Icon, title, desc }) => (
  <div className="ks-service-box">
    <div className="ks-service-icon-wrapper">{Icon}</div>
    <h3 className="ks-service-box-title">{title}</h3>
    <p className="ks-service-box-text">{desc}</p>
  </div>
);

export default About;