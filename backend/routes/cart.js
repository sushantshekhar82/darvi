const express=require('express')
const cartRoute=express();
const verifyToken = require('../middlewares/auth')
const bodyParser=require('body-parser');
const cartModel = require('../models/cart');
const productModel = require('../models/product');
cartRoute.use(bodyParser.json())
cartRoute.use(bodyParser.urlencoded({extended:true}))

cartRoute.get("/cartitems/:id",async(req,res)=>{
    const {id}=req.params
    try {
      const cart=await cartModel.find({
        userId:id})
         // Count the number of cart items with the same userId
        const cartCount = await cartModel.countDocuments({ userId: id });

        res.status(200).send({cart,cartCount})
    } catch (error) {
      res.status(400).send({"msg":error.message})
    }
  })

  cartRoute.post("/cartitems/addcart",verifyToken,async(req,res)=>{
    try {
        const { productId, productname, category, price, rating, productquantity} = req.body;
        
        // Create a new cart item using the cartModel schema
        const cartItem = new cartModel({
            productId,
            productname,
            category,
            price,
            rating,
            productquantity,
            userId:req.user._id
            
        });
        
        // Save the cart item to the database
        const savedCartItem = await cartItem.save();

        const prodId=productId;

        const productItem=await productModel.findById({ _id: prodId})
        
        res.status(201).json({ message: 'Product added to cart', cartItem: savedCartItem,productImage:productItem.image1 });
    } catch (error) {
        res.status(500).json({ msg:error.message });
    }
  })
  cartRoute.delete('/deleteCart/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        // Find and remove all cart items for the specified userId
        const deletedItems = await cartModel.deleteMany({ userId });

        res.status(200).json({ message: `Deleted ${deletedItems.deletedCount} cart items for userId: ${userId}` });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting cart items' });
    }
});


module.exports=cartRoute;