import express from "express";
import path from "path"
import mongoose from "mongoose";

import UserRoutes from "./routes/user.js"

const app = express();
const PORT = 8000

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({ extended: false}))

app.get("/", (req,res) => {
    res.render("home")
})

app.use("/user", UserRoutes)

mongoose.connect("mongodb://localhost:27017/blogiFy").then((e) => console.log(`MongoDb Connected`))

app.listen(PORT, () => console.log(`Server started at Port: ${PORT}`))