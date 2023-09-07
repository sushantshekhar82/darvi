import { Box, Flex, Grid, GridItem, Image,Text,Button, Spinner, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {BsStar,BsStarFill,BsStarHalf} from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import WithSubnavigation from '../components/Navbar';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { AppContext } from '../components/AppContextProvider';
function Star({ rating }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "#e4c72b" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf  key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar  key={i} style={{ marginLeft: "1", }} />;
        })}
    </Box>
  );
}
const SingleProductPage = () => {
  const [products,setProducts]=useState([]);
  const [selectedImage, setSelectedImage] = useState('');
  const [loading,setLoading]=useState(false)
  const token=localStorage.getItem('token')
  const param=useParams()
  const toast = useToast();
  const navigate=useNavigate()
  const[count,setCount]=useState(0)
  const {length,Length}=useContext(AppContext)
    const id=localStorage.getItem('userid')
    useEffect(()=>{
      axios.get(`https://agreeable-coat-fawn.cyclic.app/api/cart/cartitems/${id}`).then((res)=>{
      
        Length(res.data.cartCount)
      })
     },[count,length])
  useEffect(()=>{
    setLoading(true)
    

    axios.get(`https://agreeable-coat-fawn.cyclic.app/api/product/allproducts/${param.id}`).then((res)=>{
      setProducts(res.data)
      if (res.data) {
        setSelectedImage(res.data.image2url);
      }
    }).finally((res)=>{
      setLoading(false)
    })
   
  },[])

  const thumbnails = [
    
    `${products.image2url}`,
    `${products.image3url}`,
    `${products.image4url}`,
    // Add more images here
  ];
const handleCart=async()=>{
  if(token){
    await axios.post(`https://agreeable-coat-fawn.cyclic.app/api/cart/cartitems/addcart`, { 
      productId:products._id,
      productname:products.productname,
      category:products.category,
      price:products.price,
      rating:products.rating,
      image1url:products.image1url,
      productquantity:products.productquantity
     }, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`
    }
  }).then((res)=>{
    console.log(res.data.message)
  if(res.data.message==='Product added to cart'){
    toast({
      title: "Added to Cart" ,
  
      status: "success",
      duration: 3000,
      isClosable: true,
   });
   setCount(count+1)
  }else if(res.data.message==='Item already in cart'){
    toast({
      title: "Item already in cart",
      status: "warning",
      duration: 3000,
      isClosable: true,
   });
  }
  })
  }else{
    toast({
      title: "Login first" ,
  
      status: "warning",
      duration: 3000,
      isClosable: true,
   });
   navigate('/login')
   
  }
}
  return (
    <Box >
      <WithSubnavigation/>
      <Box width={{base:'95%',lg:'80%'}} margin={'auto'} >
      {loading?<Box display={'flex'} justifyContent={{base:'center',lg:'center'}} marginTop={'100px'}  width={'100%'}><Spinner
  thickness='5px'
  speed='0.65s'
  emptyColor='gray.200'
  color='green.500'
  size='xl'
  
/></Box>
        : <Grid gridTemplateColumns={{base:'1fr',md:'1fr 1fr',lg:'1fr 1fr'}}  marginTop={'80px'} paddingLeft={{base:'0px',lg:'25px'}}>
         <GridItem>
         <Box mt={4}>
        {selectedImage && (
          <Image src={selectedImage} alt="Selected Image" boxSize={{base:'80%',lg:"450px"}} width={{base:'100%',lg:'400px'}}marginLeft={{base:'0px',lg:'5px'}}  borderRadius={'10px'}  />
        )}
      </Box>
          <Flex>
        {thumbnails.map((thumbnail, index) => (
          <Image
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index}`}
            cursor="pointer"
            onClick={() => setSelectedImage(thumbnail)}
            boxSize="80px"
            m={2}
            borderRadius="md"
            boxShadow={selectedImage === thumbnail ? 'md' : 'none'}
            transition="box-shadow 0.2s"
          />
        ))}
      </Flex>
      </GridItem>
         <GridItem>
          <Flex justifyContent={'space-between'}>
         <Text  as={'h1'} fontSize={{base:'4xl',lg:'5xl'}}  fontWeight={'bold'} paddingLeft={'10px'}>{products.productname}</Text>
       
         <Star rating={products.rating} />
       
       
         </Flex>
         <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Text marginTop={'-10px'} as={'h4'} fontSize={'xl'} fontWeight={'bold'} paddingLeft={'10px'} >{products.category}</Text>
         <Flex alignItems={'center'}> <BiMessageDetail/><Text>20 reviews</Text></Flex>
         </Flex>
         <Text as={'h2'} width={'90%'} paddingLeft={'10px'} fontSize={'2xl'}>{products.shortdescription}</Text>
          <Text as={'h2'} fontSize={'3xl'} fontWeight={'bold'} paddingLeft={'10px'}>₹{products.price}</Text>
          <Text as={'h2'} width={'90%'} paddingLeft={'10px'} fontSize={'2xl'}>{products.longdescription}</Text>
         <Flex justifyContent={'space-between'}>
          <Box marginTop={'10px'} paddingLeft={'10px'}><Button bgGradient="linear(to-r,red.400, red.300)"  _hover={
          {
           cursor:'pointer'
          }}  fontSize={'xl'}  color={'white'} fontWeight={'bold'} width={{base:'150px',lg:'200px'}} height={'50px'}  borderRadius={'10px'} onClick={handleCart}>Add to Cart</Button></Box>
         
          </Flex>
         </GridItem>
      </Grid>
}<Tabs variant='unstyled' paddingLeft={'30px'} marginTop={'30px'}>
  <TabList>
    <Tab _selected={{ color: 'white', bg: '#5cac60' }} fontWeight={'bold'} width={{base:'150px',lg:'200px'}} borderRadius={'5px'}>Description</Tab>
    <Tab _selected={{ color: 'white', bg: '#5cac60' }} fontWeight={'bold'} width={{base:'150px',lg:'200px'}} borderRadius={'5px'}>Reviews</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     
    <Text as={'h2'} width={'90%'}  fontSize={'xl'}>{products.longdescription}</Text>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Box>
  )
}

export default SingleProductPage