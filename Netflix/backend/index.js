import express, { urlencoded } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js"
import cors from 'cors'
// import cookieParser from "cookie-parser";

const app = express()
dotenv.config();

// files importing from .env
const PORT = process.env.PORT || 8001
const Url = process.env.Mongo_Url;


// middlrewares 
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors())
// app.use(cookieParser)


//Api
app.use("/api/user", userRoute)
app.get("/user", (req, res) => {
    res.status(200).json({
        message: "I'm from server",
        success: true
    })
})


// Connection to the mongoDB
try {
    mongoose.connect(Url)
    console.log("MongoDB connected");
} catch (error) {
    console.log("Error", error);
}

// Server 
app.listen(PORT, () => console.log(`Server stated on PORT: ${PORT}`))