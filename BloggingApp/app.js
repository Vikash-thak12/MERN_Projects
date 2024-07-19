import dotenv from "dotenv"
import express from "express";
import path from "path"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import UserRoutes from "./routes/user.js"
import blogRoutes from "./routes/blog.js"
import { checkForAuthenticationCookie } from "./middlewares/authentication.js";
import blogModel from "./models/blog.js"

const app = express();

dotenv.config();
const PORT = process.env.PORT;


app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(checkForAuthenticationCookie("Token"))
app.use(express.static(path.resolve("./public")))


app.get("/", async (req,res) => {
    const allblogs = await blogModel.find({}).populate("createdBy")
    res.render("home", {
        user: req.user,
        blogs: allblogs
    })
})

app.use("/user", UserRoutes)
app.use("/blog", blogRoutes)

mongoose.connect(process.env.Mongo_Url).then((e) => console.log(`MongoDb Connected`))

app.listen(PORT, () => console.log(`Server started at Port: ${PORT}`))