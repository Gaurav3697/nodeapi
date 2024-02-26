import express from "express";
import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";


config({
  path: "./data/config.env",
});

//Using Middleware
export const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL
    ? [process.env.FRONTEND_URL]
    : "https://react-todo-8k5vabyut-gauravs-projects-3d02f3e1.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
  );
  app.use(cookieParser());
  app.use(errorMiddleware);
  app.use(express.json());
  app.use("/api/v1/users", userRoutes); //It tells that in all the user's routes /users is already present
  app.use("/api/v1/task", taskRoutes);
  
// route
  app.get("/",(req,res)=>{
    res.send("Nice working");
  })
  
