import express, { urlencoded } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express()
dotenv.config();

// files importing from .env
const PORT = process.env.PORT || 8000
const Url = process.env.Mongo_Url;


// middlrewares 
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cookieParser)



// Connection to the mongoDB
try {
    mongoose.connect(Url)
    console.log("MongoDB connected");
} catch (error) {
    console.log("Error", error);
}


app.listen(PORT, () => console.log(`Server stated on PORT: ${PORT}`))