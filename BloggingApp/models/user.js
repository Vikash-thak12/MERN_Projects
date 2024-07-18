import mongoose from "mongoose";
import {createHmac, randomBytes  } from "crypto"

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    salt: {
        type: String,
    },
    password: {
        type: String,
        required: true
    }, 
    profileImage: {
        type: String, 
        default: "/images/avatar.png"
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
}, {timestamps: true})

userSchema.pre("save", function (next) {
    const user = this;
    if(!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const hashpassword = createHmac("sha256", salt).update(user.password).digest("hex")

    this.salt = salt;
    this.password = hashpassword;



    next();
})

const userModel = mongoose.model("User", userSchema)

export default userModel