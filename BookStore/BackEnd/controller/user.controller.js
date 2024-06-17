import User from "../model/user.model.js";

export const signup = async (req, res) => {
    try {
        const {fullname, email, password} = req.body;
        const user = await User.findOne({ email })
        if(user) {
            return res.status(400).json({ Message: "User Already exist"})
        }
        const createUser = new User({
            fullname, 
            email,
            password
        })
        createUser.save();
        res.status(201).json({Message: "User created Successfully"})
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({ Message: "Internal server Error"})
    }
}