

import express from "express";
import dotenv from 'dotenv'
import connectDb from "./config/db.js";
import userRouter from "./routes/user_routes.js";
dotenv.config();


const app=express()
const port=process.env.PORT;
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.get('/',(req,res)=>{
//     res.render("index.ejs",{shortUrl:null})
// })

app.use('/',userRouter)

app.listen(port,()=>{
    connectDb()
    console.log(`server started at ${port}`);
    
})