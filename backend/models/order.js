const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Reference to the user model, assuming you have one
        required: true,
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'cart', // Reference to the cart model or the product model
                required: true,
            },
            productname:{
                type:String,
                required:true
            },
            image1url:{
                type:String,
                required:true
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
    totalPrice: {
        type: Number,
        required: true,
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Address', // Reference to the Address model
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
});

const orderModel = mongoose.model('order', orderSchema);

module.exports = orderModel;
