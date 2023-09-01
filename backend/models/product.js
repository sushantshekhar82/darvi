const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    productname:{
       type:String,
       required:true 
    },
    category:{
        type:String,
        required:true 
     },
     shortdescription:{
        type:String,
        required:true 
     },
     longdescription:{
        type:String,
        required:true 
     },
     price:{
        type:Number,
        required:true 
     },
     rating:{
        type:Number,
        required:true 
     },
     productquantity:{
        type:Number,
        required:true 
     },
     image1:{
        type:String

    },
    image2:{
        type:String
       
    },
    image3:{
        type:String
       
    },
})
const productModel=mongoose.model("product",productSchema)
module.exports=productModel;