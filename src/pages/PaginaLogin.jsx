// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { login as loginSchema } from '../utils/ZodSchemas';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../utils/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/api/auth", data);
      const token = response.data.token;
      console.log("Token:", token);
      // Chama o método login do contexto
      login(token);
      navigate('/'); // ou qualquer página de destino
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("email", { type: "manual", message: "Login error" });
      } else {
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#1F1F1E"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color={"white"}>
            Login
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={'#252526'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="email" isInvalid={errors.email} isRequired>
                <FormLabel color="white">Email address</FormLabel>
                <Input type="email" {...register("email")} color="white" />
                {errors.email && <Text color="red.500">{errors.email.message}</Text>}
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel color="white">Password</FormLabel>
                <Input type="password" {...register("password")} color="white" />
                {errors.password && <Text color="red.500">{errors.password.message}</Text>}
              </FormControl>
              <Stack spacing={10}>
                <Text align={'center'} color={'white'}>
                  Dont have an account? <Link color={'red.400'} onClick={() => navigate('/signup')}>Signup!</Link>
                </Text>
                <Button
                  bg={'red.600'}
                  color={'white'}
                  _hover={{
                    bg: 'red.700',
                  }}
                  type="submit">
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
