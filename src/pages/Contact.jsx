import React from 'react';
import '../pages/styles/Contact.css';

function Contact() {
  return (
    <div className="ks-contact-page">
      {/* Header Section */}
      <header className="ks-contact-header">
        <h1 className="ks-header-title">Contact us</h1>
        <p className="ks-header-subtitle">KAYOMBO STUDIO is ready to provide the right solution according to your needs</p>
      </header>

      {/* Main Form Container */}
      <div className="ks-contact-container">
        <div className="ks-contact-info-panel">
          <h2 className="ks-section-title">Get in touch</h2>
          <p className="ks-info-description">
            Sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Curabitur arcu erat, accumsan id imperdiet et.
          </p>

          <div className="ks-info-item">
            <div className="ks-info-icon">📍</div>
            <div className="ks-info-text">
              <h3 className="ks-info-label">Head Office</h3>
              <p>Jalan Cempaka Wangi No 22<br />Jakarta - Indonesia</p>
            </div>
          </div>

          <div className="ks-info-item">
            <div className="ks-info-icon">✉️</div>
            <div className="ks-info-text">
              <h3 className="ks-info-label">Email Us</h3>
              <p>support@yourdomain.tld<br />hello@yourdomain.tld</p>
            </div>
          </div>

          <div className="ks-info-item">
            <div className="ks-info-icon">📞</div>
            <div className="ks-info-text">
              <h3 className="ks-info-label">Call Us</h3>
              <p>Phone : +62.21.2002.2012<br />Fax : +62.21.2002.2013</p>
            </div>
          </div>

          <div className="ks-social-wrapper">
            <p className="ks-social-text">Follow our social media</p>
            <div className="ks-social-icons-list">
              <span className="ks-social-dot">f</span>
              <span className="ks-social-dot">ig</span>
              <span className="ks-social-dot">tw</span>
              <span className="ks-social-dot">yt</span>
            </div>
          </div>
        </div>

        <div className="ks-contact-form-panel">
          <h2 className="ks-section-title">Send us a message</h2>
          <form className="ks-form-element">
            <div className="ks-form-group-row">
              <input type="text" className="ks-form-input" placeholder="Name" />
              <input type="text" className="ks-form-input" placeholder="Company" />
            </div>
            <div className="ks-form-group-row">
              <input type="tel" className="ks-form-input" placeholder="Phone" />
              <input type="email" className="ks-form-input" placeholder="Email" />
            </div>
            <input type="text" className="ks-form-input" placeholder="Subject" />
            <textarea className="ks-form-textarea" placeholder="Message" rows="5"></textarea>
            <button type="submit" className="ks-submit-btn">Send</button>
          </form>
        </div>
      </div>

      {/* Google Maps API Integration */}
      <div className="ks-map-wrapper">
        <iframe 
          title="ks-location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.948216117544!2d106.8402!3d-6.1992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNiw1MCcyNC43IkU!5e0!3m2!1sfr!2s!4v1700000000000" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
}

export default Contact;