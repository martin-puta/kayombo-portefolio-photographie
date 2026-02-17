import React from 'react';
// import './Portefolio.css';
import '../pages/styles/Portefolio.css'
import img8 from '../assets/photos/ispiration.jpg';

const Portefolio = () => {
  const projects = [
    {
      id: 1,
      title: "Shooting Mode & Éditorial",
      category: "Photographie",
      description: "Capture de moments uniques pour des marques de prêt-à-porter. Focus sur l'éclairage studio et la colorimétrie.",
      image: "https://via.placeholder.com/400x250", // Remplacez par vos images
      side: "right"
    },
    {
      id: 2,
      title: "Aftermovie Festival Electro",
      category: "Vidéaste",
      description: "Réalisation d'un film dynamique de 3 minutes retraçant l'énergie de l'événement. Montage rythmé et sound design.",
      image: img8,
      side: "left"
    }
    // Ajoutez d'autres projets ici...
  ];

  const services = [
    { title: "MONTAGE VIDÉO", icon: "🎬", desc: "Édition professionnelle, étalonnage couleur et sound design pour vos clips." },
    { title: "SHOOTING PHOTO", icon: "📷", desc: "Séances en extérieur ou studio pour portraits, mode et produits." },
    { title: "PRISE DE VUE DRONE", icon: "🚁", desc: "Captations aériennes en 4K pour donner de la hauteur à vos projets." },
    { title: "DIRECTION ARTISTIQUE", icon: "🎨", desc: "Conseils en image et création d'univers visuels cohérents." }
  ];

  return (
    <div className="portfolio-container">
      <section className="portfolio-header">
        <h2>PORTFOLIO</h2>
        <nav className="portfolio-nav">
          <span className="active">Tout</span>
          <span>Vidéo</span>
          <span>Photo</span>
          <span>Drone</span>
        </nav>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className={`project-card ${project.side}`}>
            <div className="project-info">
              <h3>PROJET {project.id}</h3>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <button className="read-more">Voir le projet</button>
            </div>
            <div className="project-image-wrapper">
              <div className="image-border-glow">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </div>
        ))}
      </section>

      <button className="view-all-btn">Voir tout</button>

      <section className="services-section">
        <h2>SERVICES</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portefolio;