import React from 'react';
import '../pages/styles/Footer.css'
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react'; 

function Footer() {
  return (
    <footer className="footer-tech">
      <div className="footer-tech-container">
        
        <div className="footer-tech-main">
          {/* Column 1: Branding & Newsletter */}
          <div className="footer-tech-brand">
            <div className="tech-logo">
              <div className="logo-icon">K</div>
              <div>
                <h3>KAYOMBO STUDIO</h3>
                <span>Creative Design Agency</span>
              </div>
            </div>
            
            <p className="tech-description">
              Pioneer in digital visual art and high-precision photography. 
              Join our network to follow the evolution of our projects.
            </p>

            <div className="tech-newsletter">
              <h4>Stay informed</h4>
              <div className="newsletter-input-group">
                <input type="email" placeholder="Your email" />
                <button>Subscribe</button>
              </div>
              <p className="input-hint">Receive the latest updates from the studio.</p>
            </div>

            <div className="tech-socials">
              <span>Follow us:</span>
              <div className="social-icons">
                {/* Facebook Link */}
                <a 
                  href="https://www.facebook.com/share/1CCUP9jqV7/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="icon facebook"
                >
                  <Facebook size={18} />
                </a>

                {/* Instagram Link */}
                <a 
                  href="https://www.instagram.com/kayombo_studios?igsh=YTB2djBvN3V4eGN6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="icon instagram"
                >
                  <Instagram size={18} />
                </a>

                {/* <a href="#" className="icon twitter"><Twitter size={18} /></a>
                <a href="#" className="icon linkedin"><Linkedin size={18} /></a> */}
              </div>
            </div>
          </div>

          {/* Column 2: Services Menu */}
          <div className="footer-tech-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Photography</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Cinema</a></li>
              <li><a href="#">Branding</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>

          {/* Column 3: Resources Menu */}
          <div className="footer-tech-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Equipment</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Support / Quick Contact */}
          <div className="footer-tech-contact">
            <div className="contact-box">
              <h4>Questions?</h4>
              <a href="mailto:contact@kayombo.pro" className="email-link">contact@kayombo.pro</a>
              <p className="response-time">Response time: &lt; 24 hours</p>
            </div>
          </div>
        </div>

        {/* Status Bar and Legal */}
        <div className="footer-tech-bottom">
          <div className="legal-links">
            <span>© 2026 Kayombo Studio.</span>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
          <div className="system-status">
            <span className="status-dot"></span>
            <span>Systems operational</span>
            <span className="last-update">| Updated: 2h ago</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;