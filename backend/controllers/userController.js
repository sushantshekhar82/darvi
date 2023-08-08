const bcrypt = require('bcryptjs')
const userModel = require('../models/usermodel');
const { response } = require('../routes/userRoutes');
const jwt=require('jsonwebtoken');
const config = require('../config/config');
const securePassword=async(password)=>{
    try {
        const passwordHash=await bcrypt.hash(password,5)
        return passwordHash;
    } catch (error) {
        res.status(400).send(error.message)  
    }
}

const create_token=async(id)=>{
    try {
      const token= await jwt.sign({_id:id},config.jwtSecretKey)
      return token
    } catch (error) {
        res.status(400).send(error.message)  
    }
}

const register_user=async(req,res)=>{
    try {
        const spassword=await securePassword(req.body.password)
      const user=  new userModel({
          name:req.body.name,
          email:req.body.email,
          password:spassword,
          image:req.file.filename,
          mobile:req.body.mobile,

        })
        const userData=await userModel.findOne({email:req.body.email});

       if(userData){
        res.status(200).send({success:false,msg:"User already Registered"})
       }else{
        const user_data= await user.save();
        res.status(200).send({success:true,data:user_data})
       }
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const login=async(req,res)=>{
    try {
        const email=req.body.email;
        const password=req.body.password;

        const userData=await userModel.findOne({email:email})
        if(userData){
       const passwordMatch=   await bcrypt.compare(password,userData.password)
           if(passwordMatch){
            const tokenData=await create_token(userData._id)

            const userResult={
                _id:userData._id,
                name:userData.name,
                email:userData.email,
                image:userData.image,
                mobile:userData.mobile,
                token:tokenData

            }
            const resPonse={
                success:true,
                data:userResult

            }
            res.status(200).send(resPonse)

           }else{
            res.status(200).send({success:false,msg:"Login detail  are incorrect"}) 
           }

        }else{
            res.status(200).send({success:false,msg:"Login detail  are incorrect"}) 
        }
        
    } catch (error) {
        res.status(400).send(error.message) 
    }
}

const update_password=async(req,res)=>{
    try {
       const user_id=req.body.id;
       const password=req.body.password;
        
      const data = await userModel.findOne({_id:user_id});
           if(data){
            const newPassword=await securePassword(password)
           const updatepassword=await userModel.findByIdAndUpdate({_id:user_id},{$set:{
            password:newPassword
           }})
           res.status(200).send({success:true,msg:"Password updated"}) 
           }else{
            res.status(200).send({success:false,msg:"User Id not found"}) 
           }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports={
    register_user,
    login,
    update_password
}
