import React, { useState } from 'react';
import './styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating form submission
    console.log('Form Submitted:', formData);
    setFormStatus('Thank you for reaching out! We will get back to you soon.');

    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">We would love to hear from you! Feel free to reach out using the form below or through our contact details.</p>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
          ></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>

        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>

      <div className="contact-details">
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Email:</strong> contact@flame&fury.com</p>
        <p><strong>Location:</strong> Sahyadri College of Engineering</p>

        <div className="map-container">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7878.456429631167!2d74.92226832270468!3d12.865471071190845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba358ff28ef6cf3%3A0xe93953598f53c53c!2sSahyadri%20College%20Of%20Engineering%20%26%20Management%20(Autonomous)!5e0!3m2!1sen!2sin!4v1734757057282!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
