// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { jwtDecode } from 'jwt-decode';
import { Grid, Box } from '@chakra-ui/react';

const PaginaBuscar = () => {
  const [movies, setMovies] = useState([]);
  const moviesRef = useRef(null);

  const handleSearch = async (query) => {
    try {
      const token = localStorage.getItem('token');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post('http://localhost:8000/api/films', { searchQuery: query, userId }, config);
      setMovies(response.data.result.results);

      setTimeout(() => {
        if (moviesRef.current) {
          moviesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
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
    } catch (error) {
      console.error('Erro ao atualizar favorito:', error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Box
        ref={moviesRef}
        mt={10}
        sx={{ scrollMarginTop: '80px' }}
      >
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} p={6}>
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              name={movie.title}
              rating={movie.vote_average}
              image={movie.poster_path}
              id={movie.id}
              isFavorite={movie.isFavorite} // Atualizado dinamicamente
              onFavoriteToggle={() => handleFavoriteToggle({
                id: movie.id,
                name: movie.title,
                rating: movie.vote_average,
                image: movie.poster_path
              })} // Envia o objeto do filme completo
            />
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default PaginaBuscar;
