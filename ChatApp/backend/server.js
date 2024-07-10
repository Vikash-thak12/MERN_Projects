import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"


import authRoutes from "./auth/auth.routes.js"
import messageRoutes from "./auth/message.routes.js"

dotenv.config();

const app = express()
const PORT = process.env.PORT || 8001
const url = process.env.MongoUrl



// Middlewares will be here
app.use(express.json())
app.use("/auth/api", authRoutes)
app.use("/auth/messages/", messageRoutes)



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