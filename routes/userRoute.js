import express from "express";
import { loginuser, regesteruser } from "../controllers/userController.js";

const userroute = express.Router();

userroute.post("/regester", regesteruser);
userroute.post("/login", loginuser);

export default userroute;
