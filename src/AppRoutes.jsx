import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from '@chakra-ui/react'
//import Login from "./pages/PaginaLogin";
//import Favorites from "./pages/PaginaFavorites";
//import Signup from "./pages/PaginaSignup";
import Buscar from "./pages/PaginaBuscar";
import NavBar from "./components/NavBar";


const AppRoutes = () => (
  <BrowserRouter>
  <ChakraProvider>
          <NavBar />
          <Box pt="60px" bg="#1F1F1E" minH="100vh">
          <Routes>
            <Route path="/" element={<Buscar />} />

          </Routes>
          </Box>
  </ChakraProvider>
  </BrowserRouter>
);

export default AppRoutes;
