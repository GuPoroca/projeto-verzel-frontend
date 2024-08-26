import React from 'react'
import MovieCard from '../components/MovieCard'

const movieData = {
  name: "Avengers: Infinity War",
  rating: 8.246,
  image: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  id: 299536
}

function App() {
  return (
    <div>
      <MovieCard 
        name={movieData.name}
        rating={movieData.rating}
        image={movieData.image}
      />
    </div>
  )
}

export default App
