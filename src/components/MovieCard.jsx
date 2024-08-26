// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import {
  Heading,
  Box,
  Center,
  Image,
  Stack,
  IconButton,
  Text,
  Flex,
} from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function MovieCard({
  name,
  rating,
  image,
  id,
  isFavorite,
  onFavoriteToggle,
}) {
  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg="#252526" // Fundo com contraste
        color="white" // Texto branco para legibilidade
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"240px"}
          w={"full"}
          src={`https://image.tmdb.org/t/p/w500${image}`}
          objectFit="cover"
          alt={name}
        />
        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {name}
            </Heading>
          </Stack>

          <Flex direction="row" justify="center" align="center" mb={4}>
            <Stack spacing={0} align="center" mr={10}>
              {" "}
              {/* Ajuste aqui para mais separação */}
              <Text fontSize={"sm"} color={"gray.400"}>
                Rating
              </Text>
              <Text fontWeight={600} fontSize={"lg"}>
                {rating.toFixed(1)}
              </Text>
            </Stack>
            <IconButton
              aria-label="Favorite"
              icon={isFavorite ? <FaHeart /> : <FaRegHeart />}
              color={isFavorite ? "red.500" : "white"}
              bg="transparent"
              _hover={{ color: isFavorite ? "red.300" : "gray.400" }}
              onClick={() => onFavoriteToggle(id)} // Função para alternar o estado de favorito
              size="sm"
              isRound
            />
          </Flex>
        </Box>
      </Box>
    </Center>
  );
}

MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired, // Adicionada a nova prop isFavorite
  onFavoriteToggle: PropTypes.func.isRequired, // Função callback para alternar favorito
};
