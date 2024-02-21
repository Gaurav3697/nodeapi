import express from "express";
import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/task.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

config({
    path:"./data/config.env",
});

export const app = express();
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

//Using Middleware
app.use(express.json()); 
app.use("/api/v1/users",userRoutes);         //It tells that in all the user's routes /users is already present
app.use("/api/v1/task",taskRoutes);  

app.get("/",(req,res)=>{
    res.send("Nice working");
})

//using Middleware
app.use(errorMiddleware);