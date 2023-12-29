import express from "express";
import mongoose from "mongoose";

const app = express();

//Using Middleware
app.use(express.json()); 

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backendapi",
  })
  .then(() => console.log("Database conected"))
  .catch((e) => console.log(e));

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", schema);
 

app.get("/",(req,res)=>{
    res.send("Nice working");
})

app.get("/users/all",async(req,res)=>{

    const users = await User.find({})
    console.log(req.query);

    res.json({
        success:true,
        users,           //since key value is same pass as users
    });
});

app.get("/userid",async(req,res)=>{
    const {id} = req.query;
    const user = await User.findById(id);

    res.json({
        success:true,
        user,
    })
})

app.post("/users/new",async(req,res)=>{
    const {name,email,password} = req.body;

    const users = await User.create({
        name,
        email,
        password,
    });

    res.json({
        success:true,
        message:"registered successfully",           //since key value is same pass as users
    });
});

app.listen(4000,()=>{
    console.log("server is working")
})