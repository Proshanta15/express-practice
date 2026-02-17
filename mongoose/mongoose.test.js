import mongoose from "mongoose";

try {
    await mongoose.connect("mongodb://127.0.0.1/mongoose_middleware");
    mongoose.set("debug", true);
} catch (error) {
    console.error(error);
    process.exit();
}

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    age: {type: Number, required: true, min: 5},
    // createdAt: {type: Date, default: Date.now()},
    // updatedAt: {type: Date, default: Date.now()}
},{
    timestamps: true
});

const Users = mongoose.model("user", userSchema);

// await Users.create({name: "Proshanta", age: 30, email: "roy@gmail.com"});
await Users.updateOne({ email: "roy@gmail.com"}, {$set: {age: 30}});


await mongoose.connection.close();  