import {
  Heading,
  Box,
  Center,
  Image,
  Stack,
  Button,
  useColorModeValue,
  Text,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function MovieCard({name, rating, image}) {
  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'240px'} // Aumentei a altura para destacar mais a imagem
          w={'full'}
          src={`https://image.tmdb.org/t/p/w500${image}`} // Ajustei para carregar a imagem via URL com base no caminho fornecido
          objectFit="cover"
          alt={name}
        />
        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {name}
            </Heading>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{rating.toFixed(1)}</Text> {/* Formatando o rating para uma casa decimal */}
              <Text fontSize={'sm'} color={'gray.500'}>
                Rating
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Favoritar
          </Button>
        </Box>
      </Box>
    </Center>
  )
}

MovieCard.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }
