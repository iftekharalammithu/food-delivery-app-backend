import express from "express";
import { addtocart, gercart, removecart } from "../controllers/cartcontroll.js";
import authmiddleware from "../middleware/auth.js";

const cartroute = express.Router();

cartroute.post("/addtocart", authmiddleware, addtocart);
cartroute.post("/removecart", authmiddleware, removecart);
cartroute.post("/getcart", authmiddleware, gercart);

export default cartroute;
