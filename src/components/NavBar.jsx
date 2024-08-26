// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Box, Link} from "@chakra-ui/react";

const NavBar = () => {
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
        <Link
          as={RouterLink}
          to="/"
          p={2}
          color="white"
          _hover={{ textDecoration: "none", bg: "red.700" }}
        >
          Buscar Filmes
        </Link>
        <Link
          as={RouterLink}
          to="/signup"
          p={2}
          color="white"
          _hover={{ textDecoration: "none", bg: "red.700" }}
        >
          Signup
        </Link>
        <Link
          as={RouterLink}
          to="/login"
          p={2}
          color="white"
          _hover={{ textDecoration: "none", bg: "red.700" }}
        >
          Login
        </Link>
        <Link
          as={RouterLink}
          to="/favorites"
          p={2}
          color="white"
          _hover={{ textDecoration: "none", bg: "red.700" }}
        >
          Favorites
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
