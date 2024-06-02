import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    videoId : String,
    userId : String,
    commentbody : String,
    userCommentd: String,
    commentOn : {type: Date, default:Date.now}

})

export default mongoose.model("Comments", commentSchema)