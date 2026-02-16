import React from 'react';
import '../pages/styles/Service.css';

// Importations (Gardées telles quelles selon ton exemple)
import heroImg from '../assets/photos/closeup-digital-camera-with-lenses.jpg';
import mountainImg from '../assets/photos/olympus-om-shift-lens-35mm-f2-8-photography-book.jpg';
import dancerImg from '../assets/photos/ispiration.jpg';
import img1 from '../assets/photos/picture1.jpg';
import img2 from '../assets/photos/wedding.jpg';
import img4 from '../assets/photos/productShoot.jpg';
import img5 from '../assets/photos/Modele.jpg';
import img6 from '../assets/photos/Modele2.jpg';
import img7 from '../assets/photos/photo-kbk.jpg';
import img8 from '../assets/photos/ispiration.jpg';



const Service = () => {
  const services = [
    { title: "STUDIO SHOOTING", img: img1 },
    { title: "VIDEO SHOOTING", img: img5 },
    { title: "WEDDING SESSION", img: img2 },
    { title: "PRODUCT SHOOT", img: img4 },
    { title: "MODEL PHOTOGRAPHY", img: img6 },
    { title: "EVENT PHOTOGRAPHY", img: img7 },
  ];

  return (
    <div className="services-page">
      {/* HEADER : Remplacement du background-image par une balise img */}
      <header className="services-hero">
        <img src={heroImg} alt="Hero Background" className="bg-img-absolute" />
        <div className="hero-overlay">
          <h1 className="main-title">OUR SERVICES</h1>
          <p className="subtitle">WHAT WE DO</p>
        </div>
      </header>

      {/* Grille des services */}
      <section className="services-grid-container">
        <div className="services-grid">
          {services.map((item, index) => (
            <div key={index} className="service-card">
              <div className="card-img-wrapper">
                <img src={item.img} alt={item.title} className="service-img" />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>Professional photography services tailored to your needs.</p>
                <a href="#" className="read-more">LEARN MORE &gt;</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNIÈRE CTA : Remplacement du background-image par une balise img */}
      <section className="cta-banner">
        <img src={mountainImg} alt="CTA Background" className="bg-img-absolute" />
        <div className="cta-content">
          <h2>CAPTURING THE MOMENTS THAT CAPTIVATE YOUR HEART</h2>
          <button className="cta-button">VIEW PORTFOLIO</button>
        </div>
      </section>

      {/* Section Processus */}
      <section className="process-section">
        <div className="process-container">
          <div className="process-col">
            <div className="step"><h4>1. CONCEPT</h4><p>Creativity first.</p></div>
            <div className="step"><h4>2. PRODUCTION</h4><p>High quality gear.</p></div>
          </div>
          <div className="process-image-center">
            <img src={dancerImg} alt="Dancers" className="center-photo" />
          </div>
          <div className="process-col">
            <div className="step"><h4>3. EDITING</h4><p>Perfect retouching.</p></div>
            <div className="step"><h4>4. DELIVERY</h4><p>Fast and secure.</p></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stat-box"><h2>150</h2><p>AWARDS</p></div>
        <div className="stat-box"><h2>350</h2><p>PROJECTS</p></div>
        <div className="stat-box"><h2>850</h2><p>CLIENTS</p></div>
      </section>
    </div>
  );
};

export default Service;