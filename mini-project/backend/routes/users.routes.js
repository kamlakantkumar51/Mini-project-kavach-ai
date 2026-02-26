import express from "express";
import { Login, signUp,Logout } from "../controllers/auth.controllers.js";

const authRouter = express.Router();

authRouter.post("/signup",signUp)
authRouter.post("/signin",Login)
authRouter.post("/logout",Logout)
export default authRouter;