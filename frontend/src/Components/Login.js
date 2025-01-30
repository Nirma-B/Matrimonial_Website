import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 
import "./Stylesheets/LoginPage.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(''); 
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
  
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        const token = data.token;
        if (token && token.split('.').length === 3) {
          login(token); 
          localStorage.setItem('token', token);
  
          setSuccess('Login successful!');
          setTimeout(() => {
            navigate(data.redirectTo); 
          }, 2000);
        } else {
          setError('Invalid token received');
        }
      } else {
        setError(data.message || 'Login failed');
      }
  
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <img src="/login_icon.png" alt="Logo" className="logo" />
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Loading...' : 'Submit'}
            </button>
            <div className="signup-link">
              Not a member? <Link to="/signup">Signup now</Link>
            </div>

            {success && <p className="success-message">{success}</p>}

            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
        <div className="login-right">
          <img src="/background.jpg" alt="Background" className="background-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
