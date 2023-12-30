import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookies } from "../utils/features.js";

export const getMyProfile = async(req,res)=>{   

    res.status(200).json({
        success:true,
        user:req.user,
    });
} 


export const login = async(req,res,next)=>{
        const {email,password} = req.body;
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return res.status(404).json({
            success:false,
            message:"Invalid Email or Password",
        })
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        sendCookies(user,res,`Welcome back, ${user.name}`,200);
    }
}
export const logout = async(req,res)=>{
    res.status(200).cookie("token","",{
        expires:new Date(Date.now())
    })
    .json({success:true,})
};

export const register = async(req,res)=>{
    const {name,email,password} = req.body;
    let user = await User.findOne({email});
    if (user) return res.status(404).json({
        success:false,
        message:"User already exist",
    })
    const hashedPassword = await bcrypt.hash(password,10)
    user = await User.create({
        name,
        email,
        password:hashedPassword,
    })

    sendCookies(user,res,"Registered successfully",201);

}
