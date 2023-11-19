'use client'

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  useToast,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import config from '../config'



const LinkItems= [
  { name: 'Edit Products',href:'/admin', icon: FiHome },
  { name: 'Add New ',href:'/admin/addnew', icon: FiTrendingUp },
  { name: 'Orders',href:'/admin/orders', icon: FiStar },
 
]

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Image src="https://daarvipharmaceuticals.vercel.app/darvi.png" alt="Darvi"/>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
         <Link to={link.href}>
         <NavItem key={link.name} icon={link.icon}>
           {link.name}
         </NavItem>
         </Link>
      ))}
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://daarvipharmaceuticals.vercel.app/darvi.png'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Darvi</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const AddNewAdmin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const[productname,setProductName]=useState("")
  const[cost,setCost]=useState(0)
  const[quantity,setQuantity]=useState("")
  const [shortdescription,setShortDescription]=useState("")
  const [longdescription,setLongDescription]=useState("")
  const [rating,setRating]=useState(0)
  const [image1url,setImage1url]=useState("")
  const [image2url,setImage2url]=useState("")
  const [image3url,setImage3url]=useState("")
  const [image4url,setImage4url]=useState("")
  const toast = useToast();
  const token = localStorage.getItem("token");
  const handleAddProduct=()=>{
    
     if(productname!=="" && cost!=="" && shortdescription!=="" && longdescription!==""){
        const productData = {
            productname,
            price:cost,
            shortdescription,
            longdescription,
            rating,
            image1url,
            image2url,
            image3url,
            image4url,
          };
        fetch(`${config.LOCAL_URL}/api/product/allproducts`,  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify(productData)
      })
        .then((res) => res.json())
        .then((res) => {
        
            if(res.msg==="uploaded successfully"){
                toast({
                    title: "Product Added Succssfully" ,
                
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                 });
            }
        })
       
         setProductName("")
     setCost("")
     setShortDescription("")
     setLongDescription("")
     }else{
        toast({
            title: "Enter all fields " ,
        
            status: "error",
            duration: 3000,
            isClosable: true,
         });
     }
     
  }
   
  return (
    <Box minH="auto" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
      <Box margin={'auto'} padding={'10px'} borderRadius={'20px'} backgroundColor={'white'} width={'500px'} height={'auto'}>
           <Text as={'h1'} fontSize={'5xl'} fontWeight={'bold'} textAlign={'center'}>Add Products</Text>
           <Text fontSize={'md'} fontWeight={'bold'}>Product Name</Text>
           <Input marginTop={'10px'} type='text' value={productname} onChange={(e)=>setProductName(e.target.value)}  placeholder='Product Name' size='lg' />
           <Text fontSize={'md'} fontWeight={'bold'}>Price</Text>
           <Input marginTop={'10px'} type='number' value={cost} onChange={(e)=>setCost(e.target.value)}  placeholder='Cost' size='lg' />
           <Text fontSize={'md'} fontWeight={'bold'}>Short Description</Text>
           <Textarea marginTop={'10px'} type='number' value={shortdescription} onChange={(e)=>setShortDescription(e.target.value)}  placeholder='Short Description' height={'auto'} size='lg' />
           <Text fontSize={'md'} fontWeight={'bold'}>Long Description</Text>
           <Textarea marginTop={'10px'} type='number' value={longdescription} onChange={(e)=>setLongDescription(e.target.value)}  placeholder='Long Description' height={'auto'} size='lg' />
           <Text fontSize={'md'} fontWeight={'bold'}>Image Url </Text>
           <Input marginTop={'10px'} type='number' value={image1url} onChange={(e)=>setImage1url(e.target.value)}  placeholder='Enter image url ' size='lg' />
           <Text fontSize={'md'} fontWeight={'bold'}>Image Url </Text>
           <Input marginTop={'10px'} type='number' value={image2url} onChange={(e)=>setImage2url(e.target.value)}  placeholder='Enter image url' size='lg' />
           <Text fontSize={'md'} fontWeight={'bold'}>Image Url </Text>
           <Input marginTop={'10px'} type='number' value={image3url} onChange={(e)=>setImage3url(e.target.value)}  placeholder='Enter image url' size='lg' />
           <Text fontSize={'md'} fontWeight={'bold'}>Image Url </Text>
           <Input marginTop={'10px'} type='number' value={image4url} onChange={(e)=>setImage4url(e.target.value)}  placeholder='Enter image url' size='lg' />
           
           <Button  marginTop={'20px'} bg={'pink.600'} color={'white'} onClick={handleAddProduct} >Add Product</Button>
               
          </Box>
      </Box>
    </Box>
  )
}

export default AddNewAdmin