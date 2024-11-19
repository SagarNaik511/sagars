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
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Feel free to reach out using the form below or through our contact details.</p>

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
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>

      <div className="contact-details">
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Email:</strong> contact@foodhaven.com</p>
        <p><strong>Location:</strong> 123 Food Street, Culinary City, USA</p>
      </div>
    </div>
  );
}

export default Contact;
