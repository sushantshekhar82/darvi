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
  useToast,
} from '@chakra-ui/react'
import WithSubnavigation from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postuser } from '../redux/register/action'

export default function Register() {
  const [name ,setName]=useState("")
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");
  const [password,setPassword]=useState("");
  const toast = useToast();
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const {loading,message}=useSelector((store)=>store.user)
  const handleSubmit=()=>{
    if(name!=="" && email!=="" && mobile!==""&& password!==""){
      console.log(name,email,mobile,password)
      dispatch(postuser(name,email,mobile,password)).then((res)=>{
        console.log(res)
        if(res.msg=="User already Registered"){
          toast({
            title: "Email or Mobile already exists, Kindly login" ,
        
            status: "error",
            duration: 3000,
            isClosable: true,
         });
        }else{
          toast({
            title: "Registration successful" ,
             status: "success",
            duration: 5000,
            isClosable: true,
         });
         navigate("/register/verify_email")
        }
       
      
       
      })
    }else{
      toast({
        title: "Enter all fields" ,
    
        status: "error",
        duration: 1500,
        isClosable: true,
     });
     setPassword("")
    }
   
   
  }
 
  return (
<Box>
    <WithSubnavigation/>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} background={{base:"url('./darviplant.webp')",lg:'white'}} backgroundSize="cover" // Adjust the background size as needed (e.g., 'contain', 'cover', '50% 50%')
      backgroundRepeat="no-repeat" // Adjust the background repeat as needed (e.g., 'no-repeat', 'repeat', 'repeat-x', 'repeat-y')
      backgroundPosition="center"   >

      <Flex p={8} flex={1} align={'center'} justify={'center'} >
        <Stack spacing={2} w={'130%'} maxW={'md'} backgroundColor={'white'}padding={'10px'} borderRadius={'10px'}>
          <Heading fontSize={'2xl'} textAlign={'center'}>Get Started Now</Heading>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name}  onChange={(e)=>setName(e.target.value)}/>
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </FormControl>
          <FormControl id="mobile">
            <FormLabel>Mobile Number</FormLabel>
            <Input type="number" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </FormControl>
          <Stack spacing={6}>
            
            <Flex justifyContent={'center'} gap={'5px'} paddingTop={'5px'}> <Text as={'h1'}>Already Our Member?{" "}</Text><Link to="/login"><Text color={'pink.600'} fontWeight={'bold'}>Sign in</Text></Link></Flex>
        
            <Button backgroundColor={'#345b22'} color={'white'} variant={'solid'}  disabled={loading}
              onClick={handleSubmit}>
              {loading?"Wait...":"Sign up"}
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