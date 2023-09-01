const express=require('express')
const productRoute=express();
const bodyParser=require('body-parser')
productRoute.use(bodyParser.json())
productRoute.use(bodyParser.urlencoded({extended:true}))

const multer=require('multer')
const path=require('path');
const productController = require('../controllers/productController');

productRoute.use(express.static('public'))
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/productImages'),function(error,success){
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

productRoute.post('/allproducts',upload.single('image'),productController.products)

module.exports=productRoute;
