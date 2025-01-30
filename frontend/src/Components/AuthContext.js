import React, { createContext, useState, useContext } from 'react';
import {jwtDecode} from 'jwt-decode'; // Make sure you import this correctly

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('jwtToken'));
  const [user, setUser] = useState(token ? jwtDecode(token) : null); // Decode user data from token

  const login = (jwtToken) => {
    try {
      localStorage.setItem('jwtToken', jwtToken);
      setToken(jwtToken);
      const decodedUser = jwtDecode(jwtToken);
      setUser(decodedUser); // Store decoded user data
    } catch (error) {
      console.error('Invalid token:', error);
      setToken(null);
      setUser(null);
    }
  };

  const logout = () => {
    localStorage.removeItem('jwtToken');
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
