import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import usermodel from "../models/userModel.js";

// login user
const loginuser = async (req, res) => {
  console.log("login");
};

const create_jwt_token = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// regester user
const regesteruser = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const exists = await usermodel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: " Plese Enter a Valid Email!",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please Enter a Strong Password",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const newuser = new usermodel({
      name: name,
      email: email,
      password: hashedpassword,
    });
    const user = await newuser.save();
    const token = create_jwt_token(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginuser, regesteruser };
