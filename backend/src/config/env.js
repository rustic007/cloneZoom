import "dotenv/config";

export const ENV = {
    PORT: process.env.PORT || 50001,
    MONGO_URI: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV || "development"
};