import express from "express"
import userModel from "../models/user.js"

const router = express.Router();


router.get("/signup", (req, res) => {
    return res.render("signup")
})

router.get("/signin", (req, res) => {
    return res.render("signin")
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

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.matchpassword(email, password)
    return res.redirect("/")

})

export default router