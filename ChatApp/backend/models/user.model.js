import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
        required: true
    }
})

const userModel = mongoose.model("user", userSchema)
export default userModel;