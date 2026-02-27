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
          <form ref={form} onSubmit={sendEmail} className="ks-form-element">
            
            {/* Ligne 1 : Nom et Email */}
            <div className="ks-form-group-row">
              <input type="text" name="user_name" className="ks-form-input" placeholder="Full Name" required />
              <input type="email" name="user_email" className="ks-form-input" placeholder="Email Address" required />
            </div>
            
            {/* Ligne 2 : Type d'événement et WhatsApp */}
            <div className="ks-form-group-row">
              <input type="text" name="event_type" className="ks-form-input" placeholder="Event Type" />
              <input type="tel" name="user_whatsapp" className="ks-form-input" placeholder="WhatsApp Number (eg. +61...)" />
            </div>

            {/* Ligne 3 : Date et Heure de l'événement */}
            <div className="ks-form-group-row">
              <div className="ks-input-combined">
                <label className="ks-mini-label">Event Date</label>
                <input type="date" name="event_date" className="ks-form-input" />
              </div>
              <div className="ks-input-combined">
                <label className="ks-mini-label">Start Time</label>
                <input type="time" name="event_time" className="ks-form-input" />
              </div>
            </div>

            <select name="service_type" className="ks-form-input ks-form-select" required>
              <option value="">Interested in...</option>
              <option value="photography">Photography Only</option>
              <option value="videography">Videography Only</option>
              <option value="both">Photo & Video Pack</option>
            </select>

            <textarea name="message" className="ks-form-textarea" placeholder="Tell me more about your event (Location, duration, etc.)..." rows="5"></textarea>
            
            <button type="submit" className="ks-submit-btn">Check Availability</button>
          </form>
        </div>
      </div>

      <div className="ks-map-wrapper">
        <iframe 
          title="ks-location-map"
          src="about:blank" 
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