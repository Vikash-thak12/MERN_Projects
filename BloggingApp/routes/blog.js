import express from "express"

import multer from "multer";
import path from "path"
import blogModel from "../models/blog.js"
import CommentModel from "../models/comment.js";


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

router.get("/:id", async (req, res) => {
    const blog = await blogModel.findById(req.params.id).populate("createdBy")
    const comments = await CommentModel.find({ blogId: req.params.id }).populate("createdBy")
    console.log("comments", comments);
    return res.render("blog", {
        user: req.user,
        blog,
        comments
    })
})

router.post("/comment/:blogId", async (req, res) => {
    await CommentModel.create({
        content: req.body.content,
        blogId: req.params.blogId,
        createdBy: req.user._id
    })
    // console.log(comment);
    return res.redirect(`/blog/${req.params.blogId}`)
})

router.post("/", upload.single("coverImage"), async (req, res) => {
    const { title, body } = req.body
    const blog = await blogModel.create({
        title,
        body,
        createdBy: req.user._id,
        coverImage: `/uploads/${req.file.filename}`,
    })
    return res.redirect(`/blog/${blog._id}`)
})

export default router