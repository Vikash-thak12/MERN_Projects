import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    try {
        // reveiving the body from from the user
        const {fullname, email, password} = req.body;
        const user = await User.findOne({ email })  // Finding those particular user 
        if(user) {
            return res.status(400).json({ Message: "User Already exist"})
        }

        const hashPassword = await bcryptjs.hash(password, 10)  // for securing the password, use bcryptjs for hashing the password
        // If user is not there in the database then creating new one 
        const createUser = new User({
            fullname: fullname, 
            email: email,
            password: hashPassword
        })
        await createUser.save();
        res.status(201).json({Message: "User created Successfully"})
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({ Message: "Internal server Error"})
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})
        const isMatch = await bcryptjs.compare(password, user.password)
        if(!user || !isMatch) {
            return res.status(400).json({ Message: "Invalid username and password"})
        }
    } catch (error) {
        
    }
}