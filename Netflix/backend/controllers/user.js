import user from "../models/userModel";

const Register = async (req, res) => {
    try {
        const {fullname, email, password} = req.body;
        if(!fullname || !email || !password) {
            return res.status(401).json({
                message: "Please fill all the fields",
                success: false
            })
        }

        const user = await user.findOne({ email })
        if(user) {
            return res.status(401).json({
                message: "This email is already used",
                success: false
            })
        }

        await user.create({
            fullname,
            email, 
            password
        })

        res.status(200).json({
            message: "User created successfully"
        })
    } catch (error) {
        console.log("Error", error);
    }
}