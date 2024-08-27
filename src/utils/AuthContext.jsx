// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect, useContext} from 'react';
import PropTypes from "prop-types";

// Cria o contexto de autenticação
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verifica o token no localStorage para definir o estado de autenticação
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // Atualiza o estado de autenticação quando o token muda
  const login = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
    children: PropTypes.array.isRequired,
  };