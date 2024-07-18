import express from "express"

const router = express.Router();

router.get("/addblog", (req, res) => {
    return res.render("addblog", {
        user: req.user,
    })
})

router.post("/", (req, res) => {
    console.log(req.body);
    return res.redirect("/")
})

export default router