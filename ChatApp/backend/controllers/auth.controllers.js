import userModel from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import generateTokenAndCookie from "../utils/jwttoken.js";
export const signup = async (req, res) => {
    try {
        const { fullname, gmail, password, confirmpassword, gender } = req.body;
        if (password !== confirmpassword) {
            return res.status(400).json({ Error: "The passwords didn't match" })
        }

        if (!fullname || !gmail || !password || !gender ) {
            return res.status(401).json({
                Error: "Please fill all the fields"
            })
        }

        const user = await userModel.findOne({ gmail })
        if (user) {
            return res.status(401).json({ Message: "User already exists" })
        }

        const boyprofile = `https://avatar.iran.liara.run/public/boy?username={gmail}`;
        const girlprofile = `https://avatar.iran.liara.run/public/girl?username={gmail}`


        const hashpassword = await bcryptjs.hash(password, 8)
        const newUser = await userModel.create({
            fullname,
            gmail,
            password: hashpassword,
            gender,
            profilepic: gender === "male" ? boyprofile : girlprofile
        })

        if (newUser) {
            // generateTokenAndCookie(newUser._id, res)
            return res.status(200).json({
                message: "User created successfully",
                userDetails: {
                    _id: newUser._id,
                    fullname: newUser.fullname,
                    gmail: newUser.gmail,
                    gender: newUser.gender,
                    profilepic: newUser.profilepic
                }
            }
            )
        } else {
            return res.status(400).json({ Error: "Invalid user Data"})
        }

    } catch (error) {
        console.log("Error in signup Controller", error.message);
        return res.status(500).json({
            Error: "Internal Server Error"
        })
    }
}

export const login = async (req, res) => {
    try {
        const {gmail, password} = req.body;
        const user = await userModel.findOne({ gmail })
        const ismatch = await bcryptjs.compare(password, user?.password || "")
        if(!user || !ismatch) {
            return res.status(400).json({
                Error: "Invalid Username and Password"
            })
        }
        generateTokenAndCookie(user._id, res)
        return res.status(200).json({
            message: `Welcome Back ${user.gender === "male" ? "Mr." : "Mrs."} ${user.fullname}`,
            userDetails: {
                _id: user._id,
                fullname: user.fullname,
                gmail: user.gmail,
                gender: user.gender,
            }
        })
    } catch (error) {
        console.log("Error in Login Controller", error.message);
        return res.status(500).json({
            Error: "Internal Server Error"
        })
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("JWT", "", {
            maxAge: 0
        })
        return res.status(200).json({ Message: "Logged out Successfully"})
    } catch (error) {
        console.log("Error in Logout Controller", error.message);
        return res.status(500).json({
            Error: "Internal Server Error"
        })
    }
}