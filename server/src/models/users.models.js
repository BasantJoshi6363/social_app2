import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      // unique: true
    },
    email: {
      type: String,
      required: true,
      // unique: true
    },
    password: {
      type: String,
      required: true
    },
    refreshToken: {
        type : String
    }
    
  });

// userSchema.pre("save", async function(next){
//     if(!this.isModified("password")) return next();
//     this.password = await bcrypt.hash(password,10)
//    next();
// })

// userSchema.methods.isPasswordCorrect = async function(password){
//     return await bcrypt.compare(this.password,password)
// }

// userSchema.methods.generateAccessToken = async function(){
//     return jwt.sign({
//         _id : this.id,
//         email : this.email,
//         password : this.password

//     },
//         process.env.ACCESS_TOKEN_SECRET,
//         {
//             expiresIn : process.env.ACCESS_TOKEN_EXPIRY
//         })
// }
// userSchema.methods.generateRefreshToken = async function(){
//     return jwt.sign({
//         _id : this.id,
        

//     },
//         process.env.REFRESH_TOKEN_SECRET,
//         {
//             expiresIn : process.env.REFRESH
//         })
// }


export const User = mongoose.model("User",userSchema);