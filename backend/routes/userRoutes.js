const express=require('express')
const userRoute=express()

const bodyParser=require('body-parser')
userRoute.use(bodyParser.json())
userRoute.use(bodyParser.urlencoded({extended:true}))

const multer=require('multer')
const path=require('path')

userRoute.use(express.static('public'))
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/userImages'),function(error,success){
            if(error)throw error
        });
    },
    filename:function(req,file,cb){
        const name=Date.now()+'-'+file.originalname;
        cb(null,name,function(error1,success1){
            if(error1)throw error1
        })
    }
});
const upload=multer({storage:storage});

const user_controller=require("../controllers/userController")

userRoute.post('/register',upload.single('image'),user_controller.register_user)

module.exports=userRoute