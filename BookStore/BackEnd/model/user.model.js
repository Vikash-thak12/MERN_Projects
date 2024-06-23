import mongoose from "mongoose";

// creating model for user 
const userSchema = mongoose.Schema({
    fullname: {
        type: String, 
        required: true
    },
    email: {
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
export default userModel