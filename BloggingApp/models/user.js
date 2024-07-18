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
    // const salt = "someRandomSalt";
    const hashpassword = createHmac("sha256", salt).update(user.password).digest("hex")

    this.salt = salt;
    this.password = hashpassword;



    next();
})

userSchema.static("matchpassword", async function(email, password) {
    const user = await userModel.findOne({ email})
    console.log(user);
    if(!user) throw new Error("User not found!");

    const salt = user.salt;
    const hashedpassword = user.password;

    const userProvidedHash = createHmac("sha256", salt).update(password).digest("hex")

    if(hashedpassword !== userProvidedHash) throw new Error("Incorrect Password")

    return  user;

})

const userModel = mongoose.model("User", userSchema)

export default userModel