import React, { useState } from 'react';
import './styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setErrorMessage('Please fill in both fields');
      return;
    }

    // Dummy authentication (replace with backend validation)
    if (email === 'user@example.com' && password === 'password123') {
      setIsLoggedIn(true);
      setErrorMessage('');
      console.log('Login Successful');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <div className="bird"></div> {/* Flying bird animation */}
      <h1>Login</h1>
      {isLoggedIn ? (
        <div className="welcome-message">
          <h2>Welcome Back!</h2>
          <p>You have successfully logged in.</p>
          <button onClick={() => setIsLoggedIn(false)} className="logout-button">Logout</button>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="submit-button">Log In</button>
        </form>
      )}
    </div>
  );
}

export default Login;
