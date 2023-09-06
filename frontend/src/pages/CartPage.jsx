import { Box, Button } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../components/AppContextProvider'
import WithSubnavigation from '../components/Navbar'
import axios from 'axios'
const CartPage = () => {
   //http://localhost:8080/api/cart/cartitems/64f40bdf05cda2833de50720
   const {length,Length}=useContext(AppContext)
   const [products,setProducts]=useState([])
   const [count,setCount]=useState(0)
   const id=localStorage.getItem('userid')
   const [totalprice,setTotalprice]=useState(0)
   useEffect(()=>{
    axios.get(`http://localhost:8080/api/cart/cartitems/${id}`).then((res)=>{
      setProducts(res.data.cart)
      Length(res.data.cartCount)
      setTotalprice(res.data.totalCartPrice)
    })
   },[])
console.log(products,totalprice)
 return (
  <Box>
    <WithSubnavigation/>
   
  </Box>
 )
}

export default CartPage