import express from "express"
import userModel from "../models/user.js"

const router = express.Router();


router.get("/signup", (req, res) => {
    return res.render("signup")
})

router.post("/signup", async (req, res) => {
    const { fullname, email, password } = req.body;
    await userModel.create({
        fullname, 
        email,
        password
    })

    return res.redirect("/")
    
})

export default router