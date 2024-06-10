import express from "express";
import { addfood } from "../controllers/foodcontrolers.js";
import multer from "multer";

const foodrouter = express.Router();

export default foodrouter;
