import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    body: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: false
    }, 
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

const blogModel = mongoose.model("Blog", blogSchema)

export default blogModel;