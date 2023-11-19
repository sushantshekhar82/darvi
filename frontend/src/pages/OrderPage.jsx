import React, { useEffect, useState } from 'react'
import WithSubnavigation from '../components/Navbar'
import { Box, Button, Divider, Grid, GridItem, Image, Spinner, Text } from '@chakra-ui/react'
import axios from 'axios'
import config from '../config'
import MyOrderBox from '../components/MyOrderBox'
import Footer from '../components/Footer'

const OrderPage = () => {
  const id=localStorage.getItem('userid')
 const [orders,setOrders]=useState([])
 const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    axios.get(`${config.LOCAL_URL}/api/order/myorders/${id}`).then((res)=>{
         setOrders(res.data.orders)
    }).finally((res)=>{
      setLoading(false)
    });
   },[])
   console.log(orders)
  return (
    <Box>
      <WithSubnavigation/>
      
      <Box marginTop={'100px'} width={'100%'} display={'grid'} justifyContent={'center'} alignItems={'center'}>
       
       
      {loading ? (
        <Spinner size="xl" />
      ) : orders.length === 0 ? (
        <Text fontSize={'2xl'}>"Nothing You Ordered🥺"</Text>
      ) :<Box width={{base:'90%',md:'90%',lg:'100%'}} margin={'auto'}>
       {
       <Grid templateColumns={'1fr'} gap={4} >
       {orders.map((order) => (
         <GridItem key={order._id}>
         <Box
          borderWidth="1px"
          borderRadius="lg"
          p={2}
          width={'90%'}
          shadow="md"
          margin={'auto'}
          bg="gray.200" // Setting the background color to gray
>
  {/* First Row */}
  <Box display="flex" flexDirection={{base:'column',md:'column',lg:'row'}} justifyContent="space-between" gap={10} paddingRight={'20px'}>
    {/* Left Column */}
    <Box>
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        Order Details
      </Text>
      <Text>
        <strong>Order ID:</strong> #{order._id}
      </Text>
      <Text>
        <strong>Order Placed:</strong> {new Date(order.orderDate).toLocaleString()}
      </Text>
      <Text>
        <strong>Status:</strong>{" "}
        <span style={{ color: "green", fontWeight: "bold" }}>
          {order.status === "pending" ? "Pending" : order.status}
        </span>
      </Text>
      <Text>
        <strong>Delivery Date:</strong>{" "}
        <span style={{ color: "orange", fontWeight: "bold" }}>
          {order.deliveryDate ==null ? "update once status Approved" : new Date(order.deliveryDate).toLocaleString()}
        </span>
      </Text>
      {/* <Button
        bg="orange.400" // Setting button background to orange
        color="white" // Setting text color to white
      > 
        Track
      </Button>*/}
    </Box>
    {/* Right Column */}
    <Box>
      <Text fontWeight="bold" fontSize="lg">
        Address to Ship:
      </Text>
      <Text>
        <strong>Name:</strong> {order.address.name}
      </Text>
      <Text flexWrap={'wrap'}>
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
    
    </Box>
  </Box>
  {/* Second Row */}
  <Box>
    <Text fontWeight="bold" fontSize="lg" mt={2}>
      Products:
    </Text>
    
    {order.products.map((product) => (
      <Box display={'flex'} alignItems={'center'}>
      <Image src={product.image1url} width={'50px'}/>
                     <Text key={product.productId}>
                       {product.productname} - Qty:{product.productquantity}
                     </Text>
      </Box>
      
    ))}
     <Divider size={'5px'}/>
      <Text fontWeight="bold" fontSize="lg" mt={2}>
        Total Price:
      </Text>
      <Text>
        ₹{order.totalPrice}
      </Text>
    
  </Box>
</Box>

         </GridItem>
       ))}
     </Grid>
       }
      </Box>
        }
        
      </Box>
      <Footer/>
    </Box>
  )
}

export default OrderPage