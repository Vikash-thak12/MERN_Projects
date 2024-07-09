import userModel from "../models/user.model.js";
import bcryptjs from "bcryptjs"
export const signup = async (req, res) => {
    try {
        const {fullname, gmail, password, confirmpassword, gender, profilepic} = req.body;
        if(password !== confirmpassword) {
            res.status(400).json({ Error: "The passwords didn't match"})
        }

        if(!fullname || !gmail || !password || !gender || !profilepic) {
            res.status(401).json({
                Error: "Please fill all the fields"
            })
        }

        const user = await userModel.findOne({gmail})
        if(user) {
            res.status(401).json({ Error: "User already exists" })
        }

        const boyprofile = `https://avatar.iran.liara.run/public/boy?username={gmail}`;
        const girlprofile = `https://avatar.iran.liara.run/public/girl?username={gmail}`


        const hashpassword = await bcryptjs.hash(password, 8) 
        await userModel.create({
            fullname,
            gmail,
            password: hashpassword,
            gender,
            profilepic: gender === "male" ? boyprofile : girlprofile
        })

        res.status(200).json({
            message: "User created successfully"
        }, {
            _id: user._id,
            fullname,
            gmail,
            gender
        })

    } catch (error) {
        console.log("Error in signup Controller", error.message);
        res.status(500).json({
            Error: "Internal Server Error"
        })
    }
}

export const login = (req, res) => {
    res.send("This is from login page")
}

export const logout = (req, res) => {
    res.send("This is from logout page")
}