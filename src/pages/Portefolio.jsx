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
  const [activeFilter, setActiveFilter] = useState('Tout');

 const projects = [
    { 
      id: 1, 
      title: "Esthétique 80s", 
      category: "Photo", 
      description: "Série vintage capturant l'insouciance des étés rétro.", 
      image: img9 
    },
    { 
      id: 2, 
      title: "Inspiration Créative", 
      category: "Photo", 
      description: "Exploration visuelle et recherche de concepts artistiques.", 
      image: img8 
    },
    { 
      id: 3, 
      title: "Liberté Lacustre", 
      category: "Photo", 
      description: "Capture dynamique d'un saut de l'ange en plein air.", 
      image: imgJumping 
    },
    { 
      id: 4, 
      title: "Portraits Urbains", 
      category: "Photo", 
      description: "Complicité et sourires capturés dans un cadre citadin.", 
      image: img16 
    },
    { 
      id: 5, 
      title: "Union Sacrée", 
      category: "Photo", 
      description: "Reportage intimiste des moments forts d'une cérémonie.", 
      image: reportWedding 
    },
    { 
      id: 6, 
      title: "Production Kayombo", 
      category: "Vidéo", 
      description: "Réalisation d'un clip musical aux visuels percutants.", 
      image: imgKayombo 
    },
    { 
      id: 7, 
      title: "Portrait de Jeunesse", 
      category: "Vidéo", 
      description: "Storytelling vidéo axé sur l'émotion et le regard.", 
      image: img17 
    },
    { 
      id: 8, 
      title: "Session Studio", 
      category: "Vidéo", 
      description: "Coulisses d'une séance vidéo professionnelle sous les projecteurs.", 
      image: imgSeance 
    },
    { 
      id: 9, 
      title: "Perspectives Aériennes", 
      category: "Drone", 
      description: "Exploration des paysages vue du ciel en haute résolution.", 
      image: img9 
    },
    { 
      id: 10, 
      title: "Suivi de Chantier", 
      category: "Drone", 
      description: "Documentation technique de l'évolution d'une structure béton.", 
      image: imgChantier 
    },
    { 
      id: 11, 
      title: "Force & Intensité", 
      category: "Photo", 
      description: "Série athlétique sur la concentration d'une boxeuse en entraînement.", 
      image: img15 
    },
    { 
      id: 12, 
      title: "Événementiel Dynamique", 
      category: "Vidéo", 
      description: "Couverture immersive de moments d'action et de sport.", 
      image: img15 
    },
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