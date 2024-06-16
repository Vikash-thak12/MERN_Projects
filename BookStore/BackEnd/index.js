// const express = require('express')
// const dotenv = require('dotenv')
import express from "express"
import dotenv from "dotenv"

const app = express()

dotenv.config()

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`The server is running on PORT: ${PORT}`)
})