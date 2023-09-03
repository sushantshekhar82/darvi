const productModel = require("../models/product")



const products=async(req,res)=>{
    try {
        const product=new productModel({
            productname:req.body.productname,
            category:req.body.category,
            shortdescription:req.body.shortdescription,
            longdescription:req.body.longdescription,
            price:req.body.price,
            productquantity:req.body.productquantity,
            rating:req.body.rating,
            image1:req.file.filename,
            image2:req.file.filename,
            image3:req.file.filename,


        })
       const products=await product.save();
       res.status(200).send({success:true,msg:'uploaded successfully'})
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports={
    products
    
}