import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import WithSubnavigation from '../components/Navbar';

const SingleProductPage = () => {
  const [products,setProducts]=useState([]);
  const param=useParams()
  useEffect(()=>{
    
    

    axios.get(`http://localhost:8080/api/product/allproducts/${param.id}`).then((res)=>{
      setProducts(res.data)
    })
  },[])
 console.log(products)
  return (
    <Box>
      <WithSubnavigation/>

    </Box>
  )
}

export default SingleProductPage