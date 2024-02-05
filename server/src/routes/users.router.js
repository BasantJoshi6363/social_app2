import { Router } from "express";
import { generateUser, login } from "../controllers/users.controller.js";

let userRouter = Router()
userRouter.route("/api/create").post(generateUser)
userRouter.route("/api/login").post(login)

export default userRouter