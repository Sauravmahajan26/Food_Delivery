import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Saurav:Password@cluster0.j8agpfr.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
