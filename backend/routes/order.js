const express = require('express');
const orderModel = require('../models/order');
const Address = require('../models/address');
const cartModel = require('../models/cart');
const orderRouter = express.Router();

// Route to place an order
orderRouter.post('/placeorder', async (req, res) => {
    try {
      const { userId, products,totalPrice, name,address,zipcode,city,mobile } = req.body;
  
      // Calculate the total price by summing the prices of all products in the order
    //   const totalPrice = products.reduce((total, product) => {
    //     return total + product.quantity * product.product.price;
    //   }, 0);
  
      // Create an array to hold the product subdocuments
      const productsArray = products.map((product) => ({
        product: product.product, // Assuming productId is the ID of the product being ordered
        productname:product.productname,
        image1url:product.image1url,
        quantity: product.quantity,
      }));
  
      // Create a new address using the Address model
      const newAddress = new Address({
        name: name,
        address: address,
        zipcode: zipcode,
        city: city,
        mobile: mobile,
      });
  
      // Save the address to the database
      const savedAddress = await newAddress.save();
  
      // Create a new order using the orderModel schema and reference the saved address
      const order = new orderModel({
        userId,
        products: productsArray,
        totalPrice,
        address: savedAddress._id, // Reference the saved address
      });
  
      // Save the order to the database
      const savedOrder = await order.save();
     
      const deletedItems = await cartModel.deleteMany({ userId });

      res.status(201).json({ message: 'Order placed successfully', order: savedOrder });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
// Add more routes related to orders (e.g., get order history) here if needed

module.exports = orderRouter;
