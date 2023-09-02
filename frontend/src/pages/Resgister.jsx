'use client'

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
} from '@chakra-ui/react'
import WithSubnavigation from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
<Box>
    <WithSubnavigation/>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} background={{base:"url('./darviplant.webp')",lg:'white'}} backgroundSize="cover" // Adjust the background size as needed (e.g., 'contain', 'cover', '50% 50%')
      backgroundRepeat="no-repeat" // Adjust the background repeat as needed (e.g., 'no-repeat', 'repeat', 'repeat-x', 'repeat-y')
      backgroundPosition="center"   >

      <Flex p={8} flex={1} align={'center'} justify={'center'} >
        <Stack spacing={4} w={'130%'} maxW={'md'} backgroundColor={'white'}padding={'10px'} borderRadius={'10px'}>
          <Heading fontSize={'2xl'} textAlign={'center'}>Get Started Now</Heading>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            
            <Flex justifyContent={'center'} gap={'5px'} paddingTop={'10px'}> <Text as={'h1'}>Already Our Member?{" "}</Text><Link to="/login"><Text color={'pink.600'} fontWeight={'bold'}>Sign in</Text></Link></Flex>
        
            <Button backgroundColor={'#345b22'} color={'white'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
          </Stack>
      </Flex>
      <Flex flex={1} display={{base:'none',lg:'block'}}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src='./darviplant.webp'
        
        />
      </Flex>
    </Stack>
</Box>
  )
}