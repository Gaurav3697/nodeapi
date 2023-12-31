import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/task.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";

config({
    path:"./data/config.env",
});

export const app = express();
app.options('*', cors());
app.use(cookieParser());

//Using Middleware
app.use(express.json()); 
app.use("/api/v1/users",userRoutes);         //It tells that in all the user's routes /users is already present
app.use("/api/v1/task",taskRoutes); 
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

app.get("/",(req,res)=>{
    res.send("Nice working");
})

//using Middleware
app.use(errorMiddleware);