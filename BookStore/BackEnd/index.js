// const express = require('express')
// const dotenv = require('dotenv')
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()

dotenv.config()

const PORT = process.env.PORT || 8000;
const URL = process.env.MongoDBUrl;


// Connection to the mongoDb
try {
  mongoose.connect(URL)
  console.log("MongoDB Connected:");
} catch (error) {
  console.log("Error: ", error);
}
// try {
//   mongoose.connect(URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   console.log("MongoDB Connected:");
// } catch (error) {
//   console.log("Error: ", error);
// }


app.listen(PORT, () => {
  console.log(`The server is running on PORT: ${PORT}`)
})