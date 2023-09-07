import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import SingleProductPage from '../pages/SingleProductPage'
import CartPage from '../pages/CartPage'
import OrderPage from '../pages/OrderPage'
import Register from '../pages/Resgister'
import Login from '../pages/Login'
import Checkout from '../pages/Checkout'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/products_page" element={<Product/>}/>
        <Route path='/products_page/:id' element={<SingleProductPage/>}/>
        <Route path='/cart_page' element={<CartPage/>}/>
        <Route path='/order page' element={<OrderPage/>}/>
        <Route path='/checkout'   element={<Checkout/>}/>
    </Routes>
  )
}

export default AllRoutes