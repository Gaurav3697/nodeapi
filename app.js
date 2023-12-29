import express from "express";
import userRoutes from "./routes/user.js";
import {config} from "dotenv";

config({
    path:"./data/config.env",
});

export const app = express();

//Using Middleware
app.use(express.json()); 
app.use("/users",userRoutes);         //It tells that in all the user's routes /users is already present

app.get("/",(req,res)=>{
    res.send("Nice working");
})
