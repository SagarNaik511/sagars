import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCog, FaSun, FaMoon } from 'react-icons/fa';
import './styles/Header.css';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    // Optionally, save the theme preference in local storage or context
    localStorage.setItem('darkMode', !darkMode);
  };

  // Load dark mode preference from localStorage on initial load
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    }
  }, []);

  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <h1 className={`logo ${darkMode ? 'dark' : 'light'}`}>Flame & Fury</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/" className={`nav-link ${darkMode ? 'dark' : 'light'}`}>Home</Link></li>
          <li><Link to="/menu" className={`nav-link ${darkMode ? 'dark' : 'light'}`}>Menu</Link></li>
          <li><Link to="/about" className={`nav-link ${darkMode ? 'dark' : 'light'}`}>About</Link></li>
          <li><Link to="/contact" className={`nav-link ${darkMode ? 'dark' : 'light'}`}>Contact</Link></li>
          <li><Link to="/cart" className={`nav-link ${darkMode ? 'dark' : 'light'}`}>Cart</Link></li>
          <li><Link to="/login" className={`nav-link ${darkMode ? 'dark' : 'light'}`}>Login</Link></li>
          <li><Link to="/signup" className={`nav-link ${darkMode ? 'dark' : 'light'}`}>SignUp</Link></li>
        </ul>
      </nav>

      <div className="header-actions">
        <button className="action-btn"><FaSearch /></button>
        <button className="action-btn"><FaCog /></button>
        <button className="action-btn" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
