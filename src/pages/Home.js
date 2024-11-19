import React from 'react';
import './styles/Home.css';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Food Haven!</h2>
      <p>Explore our delicious menu and order your favorite dishes with ease.</p>
      <div className="featured">
        <h3>Popular Items</h3>
        <div className="featured-items">
          {/* Placeholder cards */}
          <div className="card">Pizza</div>
          <div className="card">Biriyani</div>
          <div className="card">Pasta</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
