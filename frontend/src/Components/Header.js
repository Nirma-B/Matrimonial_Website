import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Stylesheets/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => navigate('/')}>
          <img src="/ytcm_logo.png" alt="Logo" />
        </div>
        <h1>
          <span className="y">Y</span>
          <span className="t">T</span>
          <span className="matrimony">Matrimony</span>
        </h1>

        <nav className="nav-links">
          <button className="nav-link" onClick={() => navigate('/')}>Home</button>
          <button className="nav-link" onClick={() => navigate('/about-us')}>About Us</button>
          <button className="nav-link" onClick={() => navigate('/services')}>Services</button>
          <button className="nav-link" onClick={() => navigate('/faqs')}>FAQs</button>
        </nav>

        <div className="auth-buttons">
          {isAuthenticated ? (
            <button className="logout-button" onClick={logout}>Logout</button>
          ) : (
            <>
              <button className="login-button" onClick={() => navigate('/login')}>Login</button>
              <button className="signup-button" onClick={() => navigate('/signup')}>Sign Up</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
