import React, { useEffect, useState } from 'react'
import WithSubnavigation from '../components/Navbar'
import { Box, Button, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import {BsStar,BsStarFill,BsStarHalf} from 'react-icons/bs'
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

const Product = () => {
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    
    

    axios.get("http://localhost:8080/api/product/allproducts").then((res)=>{
      setProducts(res.data)
    })
  },[])
 console.log(products)
  return (
    <Box>
        <WithSubnavigation/>
        <Box marginTop={'100px'}>
        <Text as={'h2'} color={'black'} textAlign={'center'} fontSize={'20px'} fontWeight={'bold'} width={{base:'95%',lg:'500px'}} margin={'auto'}>Advanced Ayurvedic Suppliments
 that Offer Timeless Solutions</Text>
     <Box>
      <Grid gridTemplateColumns={{base:'1fr',lg:'1fr 1fr' }}  justifyContent={'center'} alignItems={'center'}>
        {
          products.map((e)=>(
      <Box width={{base:'90%',lg:'350px'}} height={'auto'} margin={'auto'} key={e._id}>
          <Image height={{base:'350px',lg:'350px'}} margin={'auto'} src={e.image1url} transform="rotate(-2deg)"/>
          <Text marginTop={'-15px'} as={'h1'} fontSize={{base:'4xl',lg:'5xl'}}  fontWeight={'bold'} paddingLeft={'10px'}>{e.productname}</Text>
          <Text marginTop={'-10px'} as={'h4'} fontSize={'xl'} fontWeight={'bold'} paddingLeft={'10px'} >{e.category}</Text>
          <Text as={'h2'} fontSize={'3xl'} fontWeight={'bold'} paddingLeft={'10px'}>₹{e.price}</Text>
          <Box paddingLeft={'10px'}><Star rating={e.rating} /></Box>
          <Box marginTop={'10px'} paddingLeft={'10px'}><Button backgroundColor={'#345b22'}  fontSize={'xl'}  color={'white'} fontWeight={'bold'} width={'100%'} height={'40px'}  borderRadius={'10px'}>Buy Now</Button></Box>
       </Box>
          ))
        }
       
      

       </Grid>
       <Image src="./group.webp" alt="darvi"/>
     </Box>
 </Box>

 
    </Box>
  )
}

export default Product