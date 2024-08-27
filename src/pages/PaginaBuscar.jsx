import React from 'react'
import SearchBar from '../components/SearchBar'

const PaginaBuscar = () => {
  const handleSearch = (query) => {
    // Aqui você pode adicionar a lógica para buscar filmes com base na consulta
    console.log('Buscando filmes com a consulta:', query)
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {/* Aqui você pode renderizar a lista de filmes ou outros componentes */}
    </div>
  )
}

export default PaginaBuscar
