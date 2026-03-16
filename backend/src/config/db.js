import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(ENV.MONGO_URI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
        });
        console.log(`MongoDB connected successfully: ${conn.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1);
    }
};