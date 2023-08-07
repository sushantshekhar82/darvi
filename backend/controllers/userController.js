const bcrypt = require('bcryptjs')
const userModel = require('../models/usermodel');
const { response } = require('../routes/userRoutes');

const securePassword=async(password)=>{
    try {
        const passwordHash=await bcrypt.hash(password,5)
        return passwordHash;
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
            const userResult={
                _id:userData._id,
                name:userData.name,
                email:userData.email,
                image:userData.image,
                mobile:userData.mobile

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

module.exports={
    register_user,
    login
}
