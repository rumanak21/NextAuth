import mongoose from "mongoose";
import { noSSR } from "next/dynamic";
export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connect to MongoBD');
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
}