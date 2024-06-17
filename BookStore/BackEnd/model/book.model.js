import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    name: String, 
    title: String, 
    Price: Number, 
    category: String, 
    description: String,
    image: String
})

const BookModel = mongoose.model("book", BookSchema)

export default BookModel;