const express = require('express');
const orderModel = require('../models/order');
const orderRouter = express.Router();

// Route to place an order
orderRouter.post('/placeOrder', async (req, res) => {
    try {
        const { userId, products} = req.body;
         // Calculate the total price by summing the prices of all products in the order
         const totalPrice = products.reduce((total, product) => {
         // Assuming each product subdocument has a "price" field
         return total + (product.quantity * product.product.price);
         }, 0);
        // Create an array to hold the product subdocuments
        const productsArray = products.map(product => ({
            product: product.productId, // Assuming productId is the ID of the product being ordered
            quantity: product.quantity,
        }));

        // Create a new order using the orderModel schema
        const order = new orderModel({
            userId,
            products: productsArray,
            totalPrice,
        });

        // Save the order to the database
        const savedOrder = await order.save();

        res.status(201).json({ message: 'Order placed successfully', order: savedOrder });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while placing the order' });
    }

});

// Add more routes related to orders (e.g., get order history) here if needed

module.exports = orderRouter;
