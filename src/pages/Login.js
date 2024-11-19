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
      <h1>Login</h1>
      {isLoggedIn ? (
        <div>
          <h2>Welcome Back!</h2>
          <p>You have successfully logged in.</p>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  );
}

export default Login;
