import React from 'react';
import './styles/About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-banner">
        <h1>About Us</h1>
        <p>Your journey to deliciousness begins here.</p>
      </div>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Welcome to Food Haven! Our mission is to bring people together through the joy of delicious, 
          freshly prepared meals. From humble beginnings as a family-run business, we've grown into a 
          beloved local favorite, known for our passion for food and exceptional service.
        </p>
      </section>

      <section className="about-section">
        <h2>What Makes Us Unique</h2>
        <ul>
          <li>Fresh, locally sourced ingredients.</li>
          <li>Authentic recipes crafted with care.</li>
          <li>A cozy atmosphere that feels like home.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src="/images/chef1.jpg" alt="Chef Maria" />
            <h3>Chef Maria</h3>
            <p>Master of Italian Cuisine</p>
          </div>
          <div className="team-member">
            <img src="/images/chef2.jpg" alt="Chef John" />
            <h3>Chef John</h3>
            <p>Expert in Fusion Delights</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
