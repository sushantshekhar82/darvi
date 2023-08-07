const express=require('express')
const app=express()
const mongoose=require('mongoose')
const userRoute = require('./routes/userRoutes')

// app.get("/",(req,res)=>{
//     res.status(200).send("welcome")
// })
app.use('/api',userRoute)

app.listen(8080,async()=>{
    try {
       mongoose.connect('mongodb+srv://sushantshekhar:sushantshekhar@cluster0.jrb6jlo.mongodb.net/darvi?retryWrites=true&w=majority') 
    console.log("server running at port 8080")
    } catch (error) {
       console.log(error) 
    }
})