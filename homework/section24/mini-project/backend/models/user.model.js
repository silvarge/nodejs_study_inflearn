import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    personal: String,
    prefer: String,
    phone: String,
    pwd: String,
    og: Object
});

export const User = mongoose.model("User", userSchema);