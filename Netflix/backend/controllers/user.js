import userModel from "../models/userModel.js";
import bcryptjs from 'bcryptjs'

export const Register = async (req, res) => {
    try {
        const {fullname, email, password} = req.body;
        if(!fullname || !email || !password) {
            return res.status(401).json({
                message: "Please fill all the fields",
                success: false
            })
        }

        const user = await userModel.findOne({ email })
        if(user) {
            return res.status(401).json({
                message: "The user is already exist",
                success: false
            })
        }

        const hashPassword = await bcryptjs.hash(password, 16)

        // here this usermodel is from controllers where this data are created in the database 
        await userModel.create({
            fullname: fullname,
            email: email, 
            password: hashPassword
        })

        res.status(200).json({
            message: "User created successfully"
        })
    } catch (error) {
        console.log("Error", error);
    }
}
