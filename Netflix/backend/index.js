import express from "express"

const app = express()
const PORT = 8000;


app.listen(PORT, () => console.log(`Server stated on PORT: ${PORT}`))