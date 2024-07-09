import express from "express"
import dotenv from 'dotenv'
import authRoutes from "./auth/auth.routes.js"

const app = express()

dotenv.config();
const PORT = process.env.PORT || 8001

app.get("/", (req, res) => {
    res.send("Hello, This is from server side")
})


app.use("/auth/api", authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})