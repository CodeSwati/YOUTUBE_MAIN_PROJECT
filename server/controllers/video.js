import videoFiles from '../models/videoFiles.js'
export const uploadvideo = async(req, res, next)=>{
    if(req.file === undefined){
        res.status(404).json({message: "plz upload a '.mp4' video file only "})
    }else {
        try {
            const file = new videoFiles({
                 videoTitle: req.body.title , 
                 fileName: req.file.originalname,
                 filePath: req.file.path,
                 fileType: req.file.mimetype,
                 fileSize: req.file.size,
                 videoChannel: req.body.channel,
                 Uploder: req.body.Uploder
            });

            await file.save();
            res.status(201).send("file uploaded successfully")
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}