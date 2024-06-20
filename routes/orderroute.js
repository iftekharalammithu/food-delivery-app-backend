import express from "express";

import {
  placeorder,
  userorder,
  verifyorder,
} from "../controllers/ordercontrol.js";
import authmiddleware from "../middleware/auth.js";

const orderrouter = express.Router();

orderrouter.post("/place", authmiddleware, placeorder);
orderrouter.post("/verify", verifyorder);
orderrouter.post("/userorder", authmiddleware, userorder);
export default orderrouter;
