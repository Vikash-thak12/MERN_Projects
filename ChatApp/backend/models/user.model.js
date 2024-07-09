import mongoose from "mongoose";

const userSchema = new   mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlengh: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    profilepic: {
        type: String,
        default: ""
    }
}, { timestamps: true})

const userModel = mongoose.model("User", userSchema)
export default userModel;