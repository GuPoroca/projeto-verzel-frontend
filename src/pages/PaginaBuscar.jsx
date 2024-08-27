// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import { Grid, Box } from '@chakra-ui/react'

const PaginaBuscar = () => {
  const [movies, setMovies] = useState([])
  const moviesRef = useRef(null)

  const handleSearch = async (query) => {
    try {
      
      const token = localStorage.getItem('token')
      
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
      
      
      const response = await axios.post('http://localhost:8000/api/films', { searchQuery: query }, config)
      setMovies(response.data.result.results)
      
      
      setTimeout(() => {
        if (moviesRef.current) {
          moviesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } catch (error) {
      console.error('Erro ao buscar filmes:', error)
    }
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Box
        ref={moviesRef}
        mt={10}
        sx={{
          scrollMarginTop: '80px'
        }}
      >
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} p={6}>
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              name={movie.title}
              rating={movie.vote_average}
              image={movie.poster_path}
              id={movie.id}
              isFavorite={false} // Por enquanto, defina como false ou adicione a lógica necessária
              onFavoriteToggle={() => {}}
            />
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default PaginaBuscar
