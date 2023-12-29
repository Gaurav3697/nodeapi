import { User } from "../models/user.js";


export const getUserId = async(req,res)=>{   //dynamic route
    const {id} = req.query;
    // const user = await User.findById(id);
    console.log(req.params);

    res.json({
        success:true,
        user:{},
    })
} 

export const getAllUsers = async(req,res)=>{

    const users = await User.find({})
    console.log(req.query);

    res.json({
        success:true,
        users,           //since key value is same pass as users
    });
}

export const CreateNewUser = async(req,res)=>{
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
}