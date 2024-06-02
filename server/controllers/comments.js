import comment from "../models/comments.js";
import mongoose from 'mongoose';

export const  postComment = async(req, res)=>{
    const commentData = req.body;
    const postComment = new comment(commentData);
    
    try {
        await postComment.save();
        res.status(200).json('posted the watchLater')
        // console.log('Done');
    } catch (error) {
        res.status(400).json(error)
    }
};

export const getComment = async(req, res)=>{
    try {
        const commentList = await comment.find();
        res.status(200).send(commentList);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

export const deleteComment = async (req, res)=> {
    const {id: _id} = req.params ;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("comment unavailable...")
        
    }
    // console.log(videoId , Viewer);
    try {
        await comment.findByIdAndRemove(_id);

        res.status(200).json({message : "deleted comment"})
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}

export const editComment = async (req, res)=> {
    const {id: _id} = req.params ;
    const {commentbody} = req.body;
    try {
        const updateComment = await comment.findByIdAndUpadate(
            _id,
            {
                $set : {"commentbody": commentbody}
            }
        )

        res.status(200).json(updateComment)
    } catch (error) {
        res.status(400).json(error);
    }
}
 