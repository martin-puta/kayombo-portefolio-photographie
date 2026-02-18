import React, { useState } from 'react';
import '../pages/styles/Portefolio.css';

import img8 from '../assets/photos/ispiration.jpg';
import img9 from '../assets/photos/women-enjoying-80s-summer-aesthetics.jpg';
// import img10 from '../assets/photos/athletic-woman-taking-break-from-training.jpg';
// import img11 from '../assets/photos/group-teenagers-cheerleader-uniforms.jpg';
// import img12 from '../assets/photos/friends-dressed-carnival-night.jpg '; 
// import img9 from '../assets/photos/group-teenagers-cheerleader-uniforms.jpg '; 
// import img13 from '../assets/photos/group-friends-having-fun-together-ferris-wheel.jpg '; 
// import img14 from '../assets/photos/img-resto.jpg ' ;
// import img15 from '../assets/photos/runners-training-together.jpg ';
// import img16 from '../assets/photos/young-woman-with-dyed-hair-near-seaside.jpg'; 
import img15 from '../assets/photos/sporty-woman-training-boxing.jpg'
import img17 from '../assets/photos/young.jpg';

const Portefolio = () => {
  const [activeFilter, setActiveFilter] = useState('Tout');

  const projects = [
    { id: 1, title: "Série Portrait 80s", category: "Photo", description: "Travail sur le grain et les couleurs vintage.", image: img9 },
    { id: 2, title: "Éditorial Mode", category: "Photo", description: "Shooting réalisé en studio pour un magazine.", image: img8 },
    { id: 3, title: "Lifestyle Extérieur", category: "Photo", description: "Capture de moments naturels en lumière dorée.", image: img9 },
    { id: 4, title: "Architecture Urbaine", category: "Photo", description: "Lignes et contrastes dans la ville.", image: img8 },
    { id: 5, title: "Reportage Mariage", category: "Photo", description: "L'émotion brute capturée sur le vif.", image: img9 },
    { id: 6, title: "Clip Vidéo Musique", category: "Vidéo", description: "Montage dynamique et étalonnage stylisé.", image: img8 },
    { id: 7, title: "Aftermovie Festival", category: "Vidéo", description: "L'énergie de l'événement condensée en 2 min.", image: img17 },
    { id: 8, title: "Publicité Marque", category: "Vidéo", description: "Storytelling visuel pour produit de luxe.", image: img8 },
    { id: 9, title: "Survol Côtier", category: "Drone", description: "Prises de vues aériennes à 4K.", image: img9 },
    { id: 10, title: "Nature Sauvage", category: "Drone", description: "La forêt vue d'en haut en automne.", image: img8 },
    { id: 11, title: "Chantiers BTP", category: "Drone", description: "Suivi de chantier par drone thermique.", image: img9 },
    { id: 12, title: "Événement Sportif", category: "Drone", description: "Suivi de course automobile à haute vitesse.", image:img15 },
  ];

  const services = [
    { title: "MONTAGE VIDÉO", icon: "🎬", desc: "Édition professionnelle et étalonnage." },
    { title: "SHOOTING PHOTO", icon: "📷", desc: "Séances en extérieur ou studio." },
    { title: "PRISE DE VUE DRONE", icon: "🚁", desc: "Captations aériennes en 4K." },
    { title: "DIRECTION ARTISTIQUE", icon: "🎨", desc: "Création d'univers visuels." }
  ];

  const filteredProjects = activeFilter === 'Tout' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = ['Tout', 'Vidéo', 'Photo', 'Drone'];

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
              <span className="pf-project-id">PROJET {project.id}</span>
              <h4 className="pf-project-title">{project.title}</h4>
              <p className="pf-project-desc">{project.description}</p>
              <button className="pf-btn-link">Voir le projet</button>
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
        <button className="pf-btn-gradient">Voir tout</button>
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