import mongoose from "mongoose";

export const connecDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://iftekharalammithu45:Nu9FSzC82zlxVOCu@cluster0.liftlda.mongodb.net/food-delivery-project"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
