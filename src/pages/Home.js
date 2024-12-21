import React from 'react';
import './styles/Home.css';


function Home() {
  return (
    <div className="home">
      <div className="welcome">
        <h2>Welcome to Flame & Fury!</h2>
        <p>Explore our delicious menu and order your favorite dishes with ease.</p>
      </div>

      <div className="featured">
        <h3>Popular Items</h3>
        <div className="featured-items">
          {/* Featured items */}
          <div className="card">
            <img src="/images/pizza.webp" alt="Pizza" />
            <div className="card-info">
              <h4>Pizza</h4>
              <p>Cheese, pepperoni, and more!</p>
            </div>
          </div>
          <div className="card">
            <img src="/images/biri.avif" alt="Biriyani" />
            <div className="card-info">
              <h4>Biriyani</h4>
              <p>Spicy and flavorful rice dish</p>
            </div>
          </div>
          <div className="card">
            <img src="/images/pasta.jpg" alt="Pasta" />
            <div className="card-info">
              <h4>Pasta</h4>
              <p>Creamy, cheesy, and delicious</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

