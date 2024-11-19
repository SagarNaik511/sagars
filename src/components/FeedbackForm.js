import React, { useState } from 'react';
import './styles/FeedbackForm.css';

function FeedbackForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', rating: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', form);
    alert('Thank you for your feedback!');
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>
      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </label>
      <label>
        Message:
        <textarea name="message" value={form.message} onChange={handleChange} required></textarea>
      </label>
      <label>
        Rating:
        <input type="number" name="rating" value={form.rating} onChange={handleChange} min="1" max="5" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
