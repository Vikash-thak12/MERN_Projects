import express from "express"


import multer from "multer";
import path from "path"
import blogModel from "../models/blog.js"


const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(`./public/uploads`))
    },
    filename: function (req, file, cb) {
        const filename = `${Date.now()}-${file.originalname}`
        cb(null, filename)
    }
})


const upload = multer({ storage: storage })

router.get("/addblog", (req, res) => {
    return res.render("addblog", {
        user: req.user,
    })
})

router.post("/", upload.single("coverImage"), async (req, res) => {
    const {title, body} = req.body
    const blog = await blogModel.create({
        title, 
        body, 
        createdBy: req.user._id,
        coverImage: `/uploads/${req.file.filename}`,
    })
    return res.redirect(`/blog/${blog._id}`)
})

export default router