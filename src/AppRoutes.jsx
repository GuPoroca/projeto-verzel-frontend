// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from '@chakra-ui/react'
import Login from "./pages/PaginaLogin";
import Favorites from "./pages/PaginaFavoritos";
import Signup from "./pages/PaginaSignup";
import Buscar from "./pages/PaginaBuscar";
import NavBar from "./components/NavBar";
import { AuthProvider, AuthContext } from './utils/AuthContext';
import { useContext } from 'react';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AuthProvider>
          <AuthConsumer>
            {({ isLoggedIn }) => <NavBar isLoggedIn={isLoggedIn} />}
          </AuthConsumer>
          <Box pt="60px" bg="#1F1F1E" minH="100vh">
            <Routes>
              <Route path="/" element={<Buscar />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/favorites/:hash" element = {<Favorites />} />
            </Routes>
          </Box>
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
};

const AuthConsumer = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return children({ isLoggedIn });
};

export default AppRoutes;