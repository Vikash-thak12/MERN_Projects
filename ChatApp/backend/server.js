import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"


import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

dotenv.config();

const app = express()
const PORT = process.env.PORT || 8001
const url = process.env.MongoUrl


// Middlewares will be here
app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)





// Apis will be here 
app.get("/", (req, res) => {
    res.send("Hello, This is from server side")
})


//connecting to mongoDB
try {
    mongoose.connect(url)
    console.log("MongoDB Connected");
} catch (error) {
    console.log("Error", error);
}

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})