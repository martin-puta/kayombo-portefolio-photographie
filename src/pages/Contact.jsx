import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faXTwitter, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import '../pages/styles/Contact.css';

function Contact() {
  const form = useRef();

 const sendEmail = (e) => {
    e.preventDefault();

    // Il est préférable d'utiliser emailjs.init(PUBLIC_KEY) une seule fois au début
    // Mais voici la méthode sendForm corrigée :
    
    emailjs.sendForm(
      "service_nsrtj5m", 
      "template_mbr7yer", 
      form.current, 
      "HJE6X79FAqnFkzN9t"
    )
    .then((result) => {
        console.log("SUCCÈS!", result.status, result.text);
        alert("Merci ! Votre message a été envoyé avec succès.");
        form.current.reset();
    })
    .catch((error) => {
        // On affiche l'erreur complète dans la console pour débugger
        console.error("ÉCHEC...", error);
        alert("Oups ! Erreur : " + JSON.stringify(error));
    });
  };
  return (
    <div className="ks-contact-page">
      <header className="ks-contact-header">
        <h1 className="ks-header-title">Let’s Capture Your Story</h1>
        <p className="ks-header-subtitle">
          KAYOMBO STUDIO – Event Photography & Cinematography across Australia.
        </p>
      </header>

      <div className="ks-contact-container">
        <div className="ks-contact-info-panel">
          <h2 className="ks-section-title">Get in Touch</h2>
          <p className="ks-info-description">
            Whether it's a corporate gala in Sydney, a wedding in the Yarra Valley, 
            or a festival in Perth, I’m available for bookings nationwide.
          </p>

          <div className="ks-info-item">
            <div className="ks-info-icon">📍</div>
            <div className="ks-info-text">
              <h3 className="ks-info-label">Base Studio</h3>
              <p>Your Street Address<br />Sydney, NSW 2000</p>
            </div>
          </div>

          <div className="ks-info-item">
            <div className="ks-info-icon">✉️</div>
            <div className="ks-info-text">
              <h3 className="ks-info-label">Email Me</h3>
              <p>hello@kayombostudio.com.au</p>
            </div>
          </div>

          <div className="ks-info-item">
            <div className="ks-info-icon">📞</div>
            <div className="ks-info-text">
              <h3 className="ks-info-label">Phone</h3>
              <p>+61 400 000 000</p>
            </div>
          </div>

          <div className="ks-social-wrapper">
            <p className="ks-social-text">Follow the Journey</p>
            <div className="ks-social-icons-list">
              <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="ks-social-link">
                <div className="ks-social-dot"><FontAwesomeIcon icon={faFacebookF} /></div>
              </a>
              <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="ks-social-link">
                <div className="ks-social-dot"><FontAwesomeIcon icon={faInstagram} /></div>
              </a>
              <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="ks-social-link">
                <div className="ks-social-dot"><FontAwesomeIcon icon={faXTwitter} /></div>
              </a>
              <a href="https://youtube.com/your-profile" target="_blank" rel="noopener noreferrer" className="ks-social-link">
                <div className="ks-social-dot"><FontAwesomeIcon icon={faYoutube} /></div>
              </a>
            </div>
          </div>
        </div>

        <div className="ks-contact-form-panel">
          <h2 className="ks-section-title">Enquire Now</h2>
          {/* Ajout du ref et du onSubmit */}
          <form ref={form} onSubmit={sendEmail} className="ks-form-element">
            <div className="ks-form-group-row">
              <input type="text" name="user_name" className="ks-form-input" placeholder="Full Name" required />
              <input type="email" name="user_email" className="ks-form-input" placeholder="Email Address" required />
            </div>
            
            <div className="ks-form-group-row">
              <input type="text" name="event_type" className="ks-form-input" placeholder="Event Type" />
              <input type="date" name="event_date" className="ks-form-input" />
            </div>

            <select name="service_type" className="ks-form-input ks-form-select" required>
              <option value="">Interested in...</option>
              <option value="photography">Photography Only</option>
              <option value="videography">Videography Only</option>
              <option value="both">Photo & Video Pack</option>
            </select>

            <textarea name="message" className="ks-form-textarea" placeholder="Tell me more about your event..." rows="5"></textarea>
            
            <button type="submit" className="ks-submit-btn">Check Availability</button>
          </form>
        </div>
      </div>

      <div className="ks-map-wrapper">
        <iframe 
          title="ks-location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8465545815774!2d151.2092955!3d-33.8688197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e879f37%3A0x6981f48623b2b52e!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sfr!4v1700000000000" 
          width="100%" 
          height="450" 
          style={{ border: 0, filter: 'grayscale(100%) brightness(0.9)' }} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
}

export default Contact;