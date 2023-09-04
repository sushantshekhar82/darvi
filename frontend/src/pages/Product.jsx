import React, { useEffect, useState } from 'react'
import WithSubnavigation from '../components/Navbar'
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'

const Product = () => {
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    fetch(`http://localhost:8080/api/product/allproducts`)
    .then((res) => res.json())
    .then((res) => {
     
       setProducts(res)
      
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
      <Grid gridTemplateColumns={{base:'1fr',lg:'1fr 1fr ' }}>
        {
          products.map((e)=>(
      <Box width={{base:'80%',lg:'250px'}} height={'300px'} border={'1px solid red'} margin={'auto'} key={e._id}>
          <Image src={`http://localhost:3000/public/productImages/${e.image1}`}/>
          
       </Box>
          ))
        }
       
      

       </Grid>
     </Box>
 </Box>

 
    </Box>
  )
}

export default Product