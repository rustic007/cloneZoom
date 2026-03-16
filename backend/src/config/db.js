import mongoose from "mongoose";
import { ENV } from "./env.js";

let isConnected = false;

export const connectDb = async () => {
    if (isConnected) {
        console.log("Using existing database connection");
        return;
    }

    try {
        await mongoose.connect(ENV.MONGO_URI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
        });
        isConnected = true;
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        throw error;
    }
};

export default mongoose;