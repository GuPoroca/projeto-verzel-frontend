import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    Link,
  } from '@chakra-ui/react'
  import { useState } from 'react'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
  import { useNavigate } from 'react-router-dom' // Importando useNavigate
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate(); // Inicializando useNavigate
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={'#1F1F1E'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'} color={'white'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.400'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={'#252526'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="username" isRequired>
                    <FormLabel color={'white'}>Username</FormLabel>
                    <Input type="text" bg={'#1F1F1E'} color={'white'} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel color={'white'}>Email</FormLabel>
                <Input type="email" bg={'#1F1F1E'} color={'white'} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel color={'white'}>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    bg={'#1F1F1E'}
                    color={'white'}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      color={'white'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'red.600'}
                  color={'white'}
                  _hover={{
                    bg: 'red.700',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'} color={'white'}>
                  Already a user? <Link color={'red.400'} onClick={() => navigate('/login')}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )
  }
  