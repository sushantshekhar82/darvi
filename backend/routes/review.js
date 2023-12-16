const express = require('express');
const orderModel = require('../models/order');
const Address = require('../models/address');
const cartModel = require('../models/cart');
const reviewModel = require('../models/review');
const userModel = require('../models/userModel');
const reviewRouter = express.Router();


reviewRouter.post('/create', async (req, res) => {
    try {
      const {desc,rating,isReviewed,productId,userId } = req.body;
  
      const user = await userModel.findById(userId)
    
      
      // Create a new order using the orderModel schema and reference the saved address
      const review = new reviewModel({
        name:user.name,
        desc,
        rating,
        isReviewed,
        userId,
        productId,
      });
  
      // Save the order to the database
      const saveReview = await review.save();
     
      
      res.status(201).json({ message: 'Review saved successfully', review: saveReview });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

reviewRouter.get('/:productId',async (req,res)=>{
    try {
        const id= req.params.productId

    // Find all review  for the specified productId
    const allReviews = await reviewModel.find({ productId: id });

    res.status(201).json(allReviews);  
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = reviewRouter;
