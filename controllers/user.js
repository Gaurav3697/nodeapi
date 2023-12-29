import { User } from "../models/user.js";


export const getUserDetail = async(req,res)=>{   //dynamic route
    const {id} = req.params;
    const user = await User.findById(id);
    
    res.json({
        success:true,
        user,
    })
} 

export const updateUser = async(req,res)=>{   //dynamic route
    const {id} = req.params;
    const user = await User.findById(id);

    res.json({
        success:true,
        message:"Updated",
    });
} ;

export const deleteUser = async(req,res)=>{   //dynamic route
    const {id} = req.params;
    const user = await User.findById(id);

    res.json({
        success:true,
        messsage: "Deleted",
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
