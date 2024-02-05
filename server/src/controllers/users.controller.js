import { User } from "../models/users.models.js";
import bcrypt from "bcrypt"


export const generateUser = async(req,res)=>{
    let {username,email,password} = req.body;
    try {
        let hashPassword = await bcrypt.hash(password,10);
        let result = await User.create({
            username,
            email,
            password :hashPassword
        })
        await result.save()
        res.status(201).json({
            success : true,
            message : "user created Sucessfully",
            result : {
                username,email,password:hashPassword
            }
        })
    } catch (error) {
        res.status(402).json({
            success : false, message : error.message
        })
    }
}

export const login = async(req,res)=>{
    const {email,password} = req.body
    try {
        let user = await User.findOne({email})
        if(!user){
            res.status(401).json({
                success: false,
                message :  "invalid user credentials"
            })
        }
        const passwordCheck = await bcrypt.compare(password,user.password)
        if(!passwordCheck){
            res.status(401).json({
                success: false,
                message :  "invalid user credentials"
            })
        }
        res.status(201).json({
            success : true,
            message : "User logged in  Successfully."
        })
    } catch (error) {
       res.status(401).json({
        success : false,
        message : error.message
       }) 
    }
}