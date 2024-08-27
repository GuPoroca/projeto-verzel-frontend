import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Center,
  Input,
  useColorModeValue,
  Flex,
  IconButton,
} from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = React.useState('')

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query)
    }
  }

  return (
    <Center h="100vh" bg={useColorModeValue('#1F1F1E', 'gray.800')}>
      <Box
        w={{ base: '90%', sm: '80%', md: '50%', lg: '40%' }}
        p={6}
        bg={useColorModeValue('white', '#252526')}
        boxShadow={'2xl'}
        rounded={'md'}
        textAlign={'center'}>
        <Flex>
          <Input
            placeholder="Buscar filmes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            size="lg"
            variant="outline"
            bg={useColorModeValue('white', 'gray.700')}
            borderColor={useColorModeValue('gray.300', 'gray.600')}
            mr={2} // Margem direita para espaço entre o Input e o botão
          />
          <IconButton
            onClick={handleSearch}
            icon={<FaSearch/>}
            colorScheme="red"
            size="lg"
            width="50px" // Ajusta a largura do botão
            height="50px" // Ajusta a altura do botão
            borderRadius="md" // Bordas arredondadas para o botão quadrado
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg={useColorModeValue('red.500', 'red.600')}
            _hover={{ bg: useColorModeValue('red.400', 'red.500') }}
          >
          </IconButton>
        </Flex>
      </Box>
    </Center>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // Função para lidar com a busca
}

export default SearchBar
