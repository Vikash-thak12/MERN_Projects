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
    try {
        const token = await userModel.matchpasswordAndGenerateToken(email, password)
        return res.cookie("Token", token).redirect("/")
    } catch (error) {
        return res.render("signin", {
            error: "Incorrect Email or Password",
        }) 
    }

})

export default router