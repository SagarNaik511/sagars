import React from 'react';
import './styles/About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Welcome to Food Haven! We started with a simple vision: to bring people together with delicious, 
          freshly prepared meals. Over the years, we've grown into a beloved destination for food lovers, 
          known for our high-quality ingredients, authentic recipes, and exceptional customer service.
        </p>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <div className="why-choose">
          <div className="reason">
            <h3>Fresh Ingredients</h3>
            <p>We source the finest ingredients locally to ensure the highest quality for every dish.</p>
          </div>
          <div className="reason">
            <h3>Authentic Recipes</h3>
            <p>Our chefs take pride in crafting delicious dishes that stay true to their origins.</p>
          </div>
          <div className="reason">
            <h3>Cozy Atmosphere</h3>
            <p>Come in, relax, and enjoy your meal in a warm and inviting space.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src="/images/eshan.avif" alt="Chef Eshan" />
            <h3>Chef Eshan</h3>
            <p>Master of Indian Cuisine</p>
          </div>
          <div className="team-member">
            <img src="/images/jnanesh.jpg" alt="Chef Jnanesh" />
            <h3>Chef Jnanesh</h3>
            <p>Expert in Fusion Delights</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
