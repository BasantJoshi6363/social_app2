import mongoose from "mongoose";

export let connectToDatabase = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/socialMedia")
        console.log("connected to database")
    } catch (error) {
        console.log(error)
    }
}