import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Food Haven. All Rights Reserved.</p>
      <ul className="social-media">
        <li>
          <a
            href="https://www.facebook.com/FoodHaven"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/FoodHaven"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link twitter"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/FoodHaven"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
          >
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
