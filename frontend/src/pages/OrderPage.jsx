import React, { useEffect, useState } from 'react'
import WithSubnavigation from '../components/Navbar'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import axios from 'axios'

const OrderPage = () => {
  const id=localStorage.getItem('userid')
 const [orders,setOrders]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:8080/api/order/myorders/₹{id}`).then((res)=>{
         setOrders(res.data.orders)
    })
   },[])
   console.log(orders)
  return (
    <div>
      <WithSubnavigation/>
      <Box marginTop={'100px'}>
        {orders.length===0?<Text fontSize={'2xl'}>"Nothing You Ordered🥺"</Text>
          :<Box width={{base:'90%',lg:'70%'}} margin={'auto'}>
       {
       <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }} gap={4}>
       {orders.map((order) => (
         <GridItem key={order._id}>
           <Box
             borderWidth="1px"
             borderRadius="lg"
             p={4}
             shadow="md"
             maxW="lg"
           >
             <Text fontWeight="bold" fontSize="lg" mb={2}>
               Order Details
             </Text>
             <Text>
               <strong>Name:</strong> {order.address.name}
             </Text>
             <Text>
               <strong>Address:</strong> {order.address.address}
             </Text>
             <Text>
               <strong>City:</strong> {order.address.city}
             </Text>
             <Text>
               <strong>Mobile:</strong> {order.address.mobile}
             </Text>
             <Text>
               <strong>Zipcode:</strong> {order.address.zipcode}
             </Text>
             <Text>
               <strong>Order Date:</strong> {new Date(order.orderDate).toLocaleString()}
             </Text>
             <Text>
               <strong>Total Price:</strong> ₹{order.totalPrice}
             </Text>
             <Text fontWeight="bold" fontSize="lg" mt={2}>
               Products:
             </Text>
             {order.products.map((product) => (
               <Text key={product.productId}>
                 {product.productname} - ₹{product.price}
               </Text>
             ))}
           </Box>
         </GridItem>
       ))}
     </Grid>
       }
      </Box>
        }
      
      </Box>
    </div>
  )
}

export default OrderPage