import React, { useState } from 'react';
import '../pages/styles/Portefolio.css';

import img8 from '../assets/photos/ispiration.jpg';
import img9 from '../assets/photos/women-enjoying-80s-summer-aesthetics.jpg';
import imgJumping from '../assets/photos/man-jumping-lake-side-view.jpg'
import img16 from '../assets/photos/smiley-girls-posing.jpg'
import img15 from '../assets/photos/sporty-woman-training-boxing.jpg'
import imgChantier from '../assets/photos/view-building-concrete-house.jpg'
import imgSeance from '../assets/photos/seance-video.jpg'
import img17 from '../assets/photos/young.jpg';
import reportWedding from '../assets/photos/wedding2.jpg'
import imgKayombo from '../assets/photos/img-kayombo.jpg'

const Portefolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { 
      id: 1, 
      title: "80s Aesthetic", 
      category: "Photo", 
      description: "Vintage series capturing the carefree spirit of retro summers.", 
      image: img9 
    },
    { 
      id: 2, 
      title: "Creative Inspiration", 
      category: "Photo", 
      description: "Visual exploration and research of artistic concepts.", 
      image: img8 
    },
    { 
      id: 3, 
      title: "Lakeside Freedom", 
      category: "Photo", 
      description: "Dynamic capture of an outdoor swan dive.", 
      image: imgJumping 
    },
    { 
      id: 4, 
      title: "Urban Portraits", 
      category: "Photo", 
      description: "Shared moments and smiles captured in a city setting.", 
      image: img16 
    },
    { 
      id: 5, 
      title: "Sacred Union", 
      category: "Photo", 
      description: "Intimate coverage of the highlights of a ceremony.", 
      image: reportWedding 
    },
    { 
      id: 6, 
      title: "Kayombo Production", 
      category: "Video", 
      description: "Creation of a music video with striking visuals.", 
      image: imgKayombo 
    },
    { 
      id: 7, 
      title: "Youth Portrait", 
      category: "Video", 
      description: "Video storytelling focused on emotion and expression.", 
      image: img17 
    },
    { 
      id: 8, 
      title: "Studio Session", 
      category: "Video", 
      description: "Behind the scenes of a professional video shoot under the spotlights.", 
      image: imgSeance 
    },
    { 
      id: 9, 
      title: "Aerial Perspectives", 
      category: "Drone", 
      description: "Exploration of landscapes from the sky in high resolution.", 
      image: img9 
    },
    { 
      id: 10, 
      title: "Construction Monitoring", 
      category: "Drone", 
      description: "Technical documentation of the progress of a concrete structure.", 
      image: imgChantier 
    },
    { 
      id: 11, 
      title: "Strength & Intensity", 
      category: "Photo", 
      description: "Athletic series on the focus of a female boxer in training.", 
      image: img15 
    },
    { 
      id: 12, 
      title: "Dynamic Events", 
      category: "Video", 
      description: "Immersive coverage of action and sports moments.", 
      image: img15 
    },
  ];

  const services = [
    { title: "VIDEO EDITING", icon: "🎬", desc: "Professional editing and color grading." },
    { title: "PHOTO SHOOT", icon: "📷", desc: "Outdoor or studio sessions." },
    { title: "DRONE FILMING", icon: "🚁", desc: "4K aerial captures." },
    { title: "ART DIRECTION", icon: "🎨", desc: "Creation of visual universes." }
  ];

  const categories = ['All', 'Video', 'Photo', 'Drone'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pf-main-wrapper">
      <section className="pf-header-section">
        <h2 className="pf-section-title">PORTFOLIO</h2>
        <nav className="pf-filter-nav">
          {categories.map((cat) => (
            <span 
              key={cat}
              className={`pf-filter-item ${activeFilter === cat ? 'pf-active' : ''}`} 
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </span>
          ))}
        </nav>
      </section>

      <section className="pf-projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className={`pf-project-card ${index % 2 === 0 ? 'pf-row' : 'pf-row-reverse'}`}>
            <div className="pf-project-info">
              <span className="pf-project-id">PROJECT {project.id}</span>
              <h4 className="pf-project-title">{project.title}</h4>
              <p className="pf-project-desc">{project.description}</p>
              <button className="pf-btn-link">View project</button>
            </div>
            <div className="pf-image-container">
              <div className="pf-image-glow-wrapper">
                <img src={project.image} alt={project.title} className="pf-project-img" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="pf-actions-center">
        <button className="pf-btn-gradient">View all</button>
      </div>

      <section className="pf-services-section">
        <h2 className="pf-section-title">SERVICES</h2>
        <div className="pf-services-grid">
          {services.map((service, index) => (
            <div key={index} className="pf-service-card">
              <div className="pf-service-icon">{service.icon}</div>
              <h3 className="pf-service-title">{service.title}</h3>
              <p className="pf-service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portefolio;