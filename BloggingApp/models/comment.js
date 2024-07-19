import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String, 
        required: true
    }, 
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true})

const CommentModel = mongoose.model("Comment", commentSchema)

export default CommentModel;