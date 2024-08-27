// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Box, Link } from '@chakra-ui/react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import {jwtDecode} from "jwt-decode";
import { AuthContext } from '../utils/AuthContext';

const NavBar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const token = localStorage.getItem('token');
  let favoritesLink = '/favorites'; // Default link if no token

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const userHash = decodedToken.hash;
      favoritesLink = `/favorites/${userHash}`;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
    }
  }

  return (
    <Flex
      as="nav"
      p={4}
      bg="red.600" // Cor vermelha estilo Netflix
      color="white"
      justifyContent="space-between"
      position="fixed"
      top={0}
      width="100%"
      zIndex={1}
      fontSize="lg" // Aumenta o tamanho da letra
      fontFamily="Montserrat, sans-serif" // Fonte mais bonita e estilizada
    >
      <Box display="flex" justifyContent="space-around" width="100%">
        {isLoggedIn ? (
          <>
            <Link
              as={RouterLink}
              to="/"
              p={2}
              color="white"
              _hover={{ textDecoration: 'none', bg: 'red.700' }}
            >
              Buscar Filmes
            </Link>
            <Link
              as={RouterLink}
              to= {favoritesLink}
              p={2}
              color="white"
              _hover={{ textDecoration: 'none', bg: 'red.700' }}
            >
              Favoritos
            </Link>
            <Link
              as={RouterLink}
              to="/login"
              p={2}
              color="white"
              _hover={{ textDecoration: 'none', bg: 'red.700' }}
              onClick={logout}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              as={RouterLink}
              to="/signup"
              p={2}
              color="white"
              _hover={{ textDecoration: 'none', bg: 'red.700' }}
            >
              Signup
            </Link>
            <Link
              as={RouterLink}
              to="/login"
              p={2}
              color="white"
              _hover={{ textDecoration: 'none', bg: 'red.700' }}
            >
              Login
            </Link>
          </>
        )}
      </Box>
    </Flex>
  );
};

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default NavBar;
