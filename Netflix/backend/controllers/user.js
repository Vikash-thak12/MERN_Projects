import userModel from "../models/userModel.js";
import bcryptjs from 'bcryptjs'

export const Signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {
            return res.status(401).json({
                message: "Please fill all the fields",
                success: false
            })
        }

        const user = await userModel.findOne({ email })
        if (user) {
            return res.status(401).json({
                message: "The user is already exist",
                success: false
            })
        }

        const hashPassword = await bcryptjs.hash(password, 8)

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


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid username, Please check your UserName correctly",
                success: false
            });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password, Please check your password",
                success: false
            });
        }


        res.status(200).json({
            message: "Login successfully",
            user: {
                _id: user._id,
                name: user.fullname,
                email: user.email
            }
        });
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};