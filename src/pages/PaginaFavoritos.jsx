// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import MovieCard from "../components/MovieCard";
import { jwtDecode } from "jwt-decode";
import { Grid, Box, Text, Link, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const PaginaFavoritos = () => {
  const [movies, setMovies] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);
  const [userName, setUserName] = useState('');
  const moviesRef = useRef(null);
  const { hash } = useParams(); // Captura o parâmetro hash da URL
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const userHash = decodedToken.hash; // Hash do usuário logado

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const userHash = decodedToken.hash; // Hash do usuário logado

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        };

        // Obtém os filmes favoritos do usuário com base no hash da URL
        const response = await axios.get(`http://localhost:8000/api/films/${hash}`, config);
        setMovies(response.data);

        // Obtém os filmes favoritos do usuário logado
        const userResponse = await axios.get(`http://localhost:8000/api/films/${userHash}`, config);
        setUserFavorites(userResponse.data);

        const userResponseName = await axios.get(`http://localhost:8000/api/user/${hash}`, config);
        setUserName(userResponseName.data);
        setTimeout(() => {
          if (moviesRef.current) {
            moviesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    fetchFavorites();
  }, [hash]);
  
  // Verifica se o filme está na lista de favoritos do usuário logado
  const isFavorite = (movieId) => {
    return userFavorites.some(movie => movie.id === movieId);
  };

  const handleFavoriteToggle = async (movie) => {

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      // Atualiza o estado de favorito no backend
      await axios.post('http://localhost:8000/api/favorite', movie, config);

      // Atualiza o estado local dos filmes
      setMovies(prevMovies =>
        prevMovies.map(m =>
          m.id === movie.id ? { ...m, isFavorite: !m.isFavorite } : m
        )
      );

      // Atualiza a lista de favoritos do usuário logado, se estiver visualizando sua própria lista
      if (userHash !== hash) {
        setUserFavorites(prevFavorites =>
          prevFavorites.some(m => m.id === movie.id)
            ? prevFavorites.filter(m => m.id !== movie.id)
            : [...prevFavorites, movie]
        );
      }else{
        const thisMovie = movie.id;
        setMovies(movies.filter(movie => movie.id !== thisMovie));
      }
    } catch (error) {
      console.error('Erro ao alternar favorito:', error);
    }
  };

  return (
    <Box
      ref={moviesRef}
      mt={10}
      sx={{
        scrollMarginTop: "80px",
      }}
    >
        <Box mb={6} p={4} borderWidth="1px" borderRadius="md" bg="gray.100">
        <Stack align={"center"}>
        <Text fontSize="xl" fontWeight="bold">
          {userHash === hash ? (
            <>Essa é sua lista de favoritos, compartilhe ela: <Link color="blue.500" href={window.location.href}>{window.location.href}</Link></>
          ) : (
            <>Lista de favoritos do {userName}</>
          )}
        </Text>
        </Stack>
      </Box>
      <Grid
        templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gap={6}
        p={6}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            name={movie.name}
            rating={movie.rating}
            image={movie.image}
            id={movie.id}
            isFavorite={isFavorite(movie.id)} // Define se o filme é favorito para o usuário logado
            onFavoriteToggle={() => handleFavoriteToggle({
                id: movie.id,
                name: movie.name,
                rating: movie.rating,
                image: movie.image
              })}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default PaginaFavoritos;
