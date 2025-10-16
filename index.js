

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

// app.listen(port,()=>{
//     connectDb()
//     console.log(`server started at ${port}`);
    
// })

// Default 404 handler
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// Start server after connecting to DB
const startServer = async () => {
  try {
    await connectDb(); // make sure connectDb returns a promise
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to DB:", error);
    process.exit(1);
  }
};

startServer();