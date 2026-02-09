import React from 'react';
import '../pages/styles/Footer.css'
// Note: Utilise tes propres icônes ou une librairie comme lucide-react / font-awesome
import { Mail, Instagram, Linkedin, Twitter, Github } from 'lucide-react'; 

function Footer() {
  return (
    <footer className="footer-tech">
      <div className="footer-tech-container">
        
        <div className="footer-tech-main">
          {/* Colonne 1: Branding & Newsletter */}
          <div className="footer-tech-brand">
            <div className="tech-logo">
              <div className="logo-icon">K</div>
              <div>
                <h3>KAYOMBO STUDIO</h3>
                <span>Creative Design Agency</span>
              </div>
            </div>
            
            <p className="tech-description">
              Pionnier dans l'art visuel numérique et la photographie de haute précision. 
              Rejoignez notre réseau pour suivre l'évolution de nos projets.
            </p>

            <div className="tech-newsletter">
              <h4>Restez informé</h4>
              <div className="newsletter-input-group">
                <input type="email" placeholder="Votre email" />
                <button>S'abonner</button>
              </div>
              <p className="input-hint">Recevez les dernières mises à jour du studio.</p>
            </div>

            <div className="tech-socials">
              <span>Suivez-nous :</span>
              <div className="social-icons">
                <a href="#" className="icon twitter"><Twitter size={18} /></a>
                <a href="#" className="icon linkedin"><Linkedin size={18} /></a>
                <a href="#" className="icon instagram"><Instagram size={18} /></a>
                <a href="#" className="icon github"><Github size={18} /></a>
              </div>
            </div>
          </div>

          {/* Colonne 2: Menu Services */}
          <div className="footer-tech-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Photographie</a></li>
              <li><a href="#">Design Graphique</a></li>
              <li><a href="#">Cinéma</a></li>
              <li><a href="#">Branding</a></li>
              <li><a href="#">Consultation</a></li>
            </ul>
          </div>

          {/* Colonne 3: Menu Ressources */}
          <div className="footer-tech-links">
            <h4>Ressources</h4>
            <ul>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Études de cas</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Équipement</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Colonne 4: Support / Contact Rapide */}
          <div className="footer-tech-contact">
            <div className="contact-box">
              <h4>Des questions ?</h4>
              <a href="mailto:contact@kayombo.pro" className="email-link">contact@kayombo.pro</a>
              <p className="response-time">Temps de réponse : &lt; 24 heures</p>
            </div>
          </div>
        </div>

        {/* Barre de Status et Légal */}
        <div className="footer-tech-bottom">
          <div className="legal-links">
            <span>© 2026 Kayombo Studio.</span>
            <a href="#">Confidentialité</a>
            <a href="#">Conditions</a>
            <a href="#">Cookies</a>
          </div>
          <div className="system-status">
            <span className="status-dot"></span>
            <span>Systèmes opérationnels</span>
            <span className="last-update">| Mis à jour : il y a 2h</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;