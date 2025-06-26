import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const dbConfig = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database connected to ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default dbConfig;
