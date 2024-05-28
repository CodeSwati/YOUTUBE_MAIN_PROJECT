import mongoose from 'mongoose';
import users from '../models/auth.js'

export const updateChannelData = async(req,res)=>{
    const {id:_id}= req.params;
    const {name, desc} = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("channel unavailable...")
        
    }

    try {
        const updateData = await users.findByIdAndUpadate(_id,{
            $set:{
                'name': name, 'desc' :desc
            }
        },{new: true})
        res.status(200).json(updateData)
    } catch (error) {
        res.status(404).json({message : error.message})
        
    }
}