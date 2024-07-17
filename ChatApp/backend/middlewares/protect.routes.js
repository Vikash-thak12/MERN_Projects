import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        // console.log("Token is: ",token);
        if(!token) {
            return res.status(401).json({
                message: "No token, authorization denied"
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if(!decoded) {
            return res.status(401).json({
                message: "Invalid token, authorization denied"
            })
        }
        // getting the users
        const user = await userModel.findById(decoded.userId).select("-password")
        if(!user) {
            return res.status(401).json({
                message: "User not found, authorization denied"
            })
        }

        req.user = user;
        next()
    
    } catch (error) {
        console.log("Error in ProtectRoutes Middleware: ", error.message);
        return res.status(500).json({
            Error: "Internal server Error"
        })
    }
}

export default protectRoute
