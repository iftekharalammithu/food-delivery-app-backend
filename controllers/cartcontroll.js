import usermodel from "../models/userModel.js";

const addtocart = async (req, res) => {
  try {
    let userdata = await usermodel.findOne({ _id: req.body.userid });
    console.log(req.body.itemid);
    let cartdata = await userdata.cartdata;

    if (!cartdata[req.body.itemid]) {
      cartdata[req.body.itemid] = 1;
    } else {
      cartdata[req.body.itemid] += 1;
    }
    await usermodel.findByIdAndUpdate(req.body.userid, { cartdata });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removecart = async (req, res) => {
  try {
    let userdata = await usermodel.findOne({ _id: req.body.userid });
    let cartdata = await userdata.cartdata;
    if (cartdata[req.body.itemid] > 0) {
      cartdata[req.body.itemid] -= 1;
    }
    await userdata.findByIdAndUpdate(req.body.userid, { cartdata });
    res.json({ success: true, message: "Removed from cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
const gercart = (req, res) => {};

export { addtocart, removecart, gercart };
