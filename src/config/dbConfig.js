import mongoose from "mongoose";
import { MONGO_URI } from "./serverConfig.js";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;    
    } catch (error) {
        console.log("Error connecting to database", error);
        process.exit(1);
    }
}