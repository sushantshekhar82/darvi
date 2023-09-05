import { Box, Flex, Grid, GridItem, Image,Text,Button, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {BsStar,BsStarFill,BsStarHalf} from 'react-icons/bs'
import WithSubnavigation from '../components/Navbar';
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
 
  const param=useParams()
  useEffect(()=>{
    setLoading(true)
    

    axios.get(`http://localhost:8080/api/product/allproducts/${param.id}`).then((res)=>{
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
          <Text marginTop={'-10px'} as={'h4'} fontSize={'xl'} fontWeight={'bold'} paddingLeft={'10px'} >{products.category}</Text>
         <Text as={'h2'} width={'90%'} paddingLeft={'10px'} fontSize={'2xl'}>{products.shortdescription}</Text>
          <Text as={'h2'} fontSize={'3xl'} fontWeight={'bold'} paddingLeft={'10px'}>₹{products.price}</Text>
          <Text as={'h2'} width={'90%'} paddingLeft={'10px'} fontSize={'2xl'}>{products.longdescription}</Text>
        
          <Box marginTop={'10px'} paddingLeft={'10px'}><Button backgroundColor={'#345b22'}  fontSize={'xl'}  color={'white'} fontWeight={'bold'} width={'100%'} height={'40px'}  borderRadius={'10px'}>Buy Now</Button></Box>
         </GridItem>
      </Grid>
}
      </Box>
    </Box>
  )
}

export default SingleProductPage