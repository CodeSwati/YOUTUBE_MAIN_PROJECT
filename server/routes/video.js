import express from 'express'
import {uploadvideo , getAllvideos} from '../controllers/video.js'
import {likeController } from '../controllers/like.js'
import upload from '../Helpers/fileHelpers.js'
import {likeVideoController, getAllLikeVideoController,deleteLikeVideoController} from '../controllers/likeVideo.js'
import {watchLaterController, getAllwatchLaterController, deleteWatchLaterController} from '../controllers/watchLater.js'
const routes = express.Router();

routes.post("/uploadvideo", upload.single("file"), uploadvideo);
routes.get("/getvideos", getAllvideos);
routes.patch('/like/:id', likeController);

routes.post('/likeVideo', likeVideoController)
routes.get('/getAllLikeVideo', getAllLikeVideoController)
routes.delete('/deleteLikedVideo/:videoId/:Viewer', deleteLikeVideoController)


routes.post('/watchLater', watchLaterController)
routes.get('/getAllwatchLater', getAllwatchLaterController);
routes.delete('/deleteWatchLater/:videoId/:Viewer', deleteWatchLaterController)

export default routes;