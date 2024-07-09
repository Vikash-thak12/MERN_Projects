import express from "express"
import dotenv from 'dotenv'
import authRoutes from "./auth/auth.routes.js"
import mongoose from "mongoose"

const app = express()

dotenv.config();


const PORT = process.env.PORT || 8001
const url = process.env.MongoUrl


// Apis will be here 
app.get("/", (req, res) => {
    res.send("Hello, This is from server side")
})


app.use(express.json())
app.use("/auth/api", authRoutes)


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