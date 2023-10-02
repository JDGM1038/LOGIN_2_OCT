import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://carlos:carlos123@cluster1.btrcc24.mongodb.net/");
        console.log(">> DB Connect");
    } catch (error) {
        console.log(error)
    }
}