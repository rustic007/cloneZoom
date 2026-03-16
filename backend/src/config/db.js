import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDb = async () => {
    if (mongoose.connection.readyState === 1) {
        return;
    }

    try {
        await mongoose.connect(ENV.MONGO_URI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
        });
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        throw error;
    }
};

export default mongoose;