import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-info">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels!
          </p>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div className="contact-details">
              <h3>Phone</h3>
              <p>+91 91012 48329</p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div className="contact-details">
              <h3>Email</h3>
              <p>mohitagarwal4567@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-details">
              <h3>Location</h3>
              <p>Guwahati, Assam</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2 className="form-title">Contact Me</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
