import express from "express"
import cors from "cors"
let app = express()
import dotenv from "dotenv"
import { connectToDatabase } from "./src/database/database.js"
import userRouter from "./src/routes/users.router.js"
dotenv.config({
    path: './.env'
})

app.use(cors())
app.use(express.json())
app.use("/",userRouter)


let port = process.env.PORT || 4000

connectToDatabase()
.then(()=>{
    app.listen(port,()=>{
        console.log("server is running at port 4000")
    })
})
.catch(()=>{
    console.log("problem while connecting with server")
})


