import mongoose from "mongoose";

try {
    await mongoose.connect("mongodb://localhost:27017/mongodb_nodejs_db");
    mongoose.set("debug", true);
} catch (error) {
    console.error(error);
    process.exit();
}