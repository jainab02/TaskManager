import mongoose from "mongoose";
import { config } from "dotenv";
config();
const MONGODB_URI = process.env.MONGODB_URI;
const connection = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected Successfully");
  } catch (err) {
    console.log(err);
  }
};

export default connection;
