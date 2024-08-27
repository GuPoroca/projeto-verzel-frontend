import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from '@chakra-ui/react'
import Login from "./pages/PaginaLogin";
//import Favorites from "./pages/PaginaFavorites";
import Signup from "./pages/PaginaSignup";
import Buscar from "./pages/PaginaBuscar";
import NavBar from "./components/NavBar";


const AppRoutes = () => {

  const isLoggedIn = false;
  return(
  <BrowserRouter>
  <ChakraProvider>
          <NavBar isLoggedIn={isLoggedIn} />
          <Box pt="60px" bg="#1F1F1E" minH="100vh">
          <Routes>
            <Route path="/" element={<Buscar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

          </Routes> 
          </Box>
  </ChakraProvider>
  </BrowserRouter>
)
};

export default AppRoutes;
