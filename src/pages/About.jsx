import React from 'react';
import '../pages/styles/About.css'
import { CameraIcon, VideoCameraIcon, PaintBrushIcon, SparklesIcon } from '@heroicons/react/24/outline';
import ImageKayombo from '../assets/photos/Logo-kayombo.jpg'

const About = () => {
  return (
    <div className="ks-about-wrapper">
      
      {/* HERO SECTION */}
      <section className="ks-hero-container">
        <div className="ks-hero-main-content">
          <h4 className="ks-hero-subtitle">Toowoomba, QLD</h4>
          <h1 className="ks-hero-heading">KAYOMBO <span className="ks-brand-accent">STUDIOS</span></h1>
          <p className="ks-hero-text">
            Photography • Videography • Editing • Creative Design. 
            Capturing real moments, creating eternal memories.
          </p>
          <button className="ks-contact-trigger">
            CONTACT ME
          </button>
        </div>
        
        <div className="ks-hero-visual-layer">
           <img src={ImageKayombo} alt="Kayombo Studios Logo" className="ks-hero-img" />
        </div>
      </section>

      {/* WHO AM I SECTION */}
      <section className="ks-bio-section">
        <div className="ks-bio-layout">
          <div className="ks-bio-description">
            <h2 className="ks-bio-title">The Story Behind the Lens</h2>
            <p className="ks-bio-paragraph">
              My name is <strong>Bernard</strong>. My creative journey began two years ago. 
              What started as simple curiosity has grown into a consuming passion for visual excellence.
            </p>
            <p className="ks-bio-paragraph">
              Today, Kayombo Studios is the result of that discipline. I don’t just take photos; 
              I help people feel confident and businesses communicate with impact.
            </p>
          </div>
          
          <div className="ks-stats-container">
            <div className="ks-stat-item">
              <span className="ks-stat-value">2+</span>
              <p className="ks-stat-desc">Years of experience</p>
            </div>
            <div className="ks-stat-item">
              <span className="ks-stat-value">100%</span>
              <p className="ks-stat-desc">Commitment & Integrity</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="ks-offerings-section">
        <h2 className="ks-offerings-main-title">My Services</h2>
        <div className="ks-offerings-grid">
          
          <ServiceCard 
            Icon={<CameraIcon />} 
            title="Photography" 
            desc="Portraits, Weddings, Events, and Lifestyle." 
          />
          <ServiceCard 
            Icon={<VideoCameraIcon />} 
            title="Videography" 
            desc="Commercials, Instagram Reels, and Storytelling." 
          />
          <ServiceCard 
            Icon={<SparklesIcon />} 
            title="Editing" 
            desc="Cinematic color grading and advanced editing." 
          />
          <ServiceCard 
            Icon={<PaintBrushIcon />} 
            title="Branding" 
            desc="Logo design and visual identity creation." 
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