
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app =express()
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://deliveryapp-mfnf.vercel.app/login'], 
    credentials: true 
}));  
import { postUser,postLogin, getUser } from "./controllers/user.js";

const PORT=process.env.PORT || 5000;

const connectMongoDB=async()=>{try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if(conn){
        console.log("api is working")
    }
    }catch(e){
    console.log(e)
}
  
};
connectMongoDB();

// api for task
app.post("/api/users",postUser);
app.post("/api/login/users",postLogin);
app.get("/api/users",getUser)

app.listen(PORT,()=>{
    console.log(" server is running on port 5000")
}) 