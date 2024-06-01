import express from 'express'
import {uploadvideo , getAllvideos} from '../controllers/video.js'
import {likeController } from '../controllers/like.js'
import {viewController } from '../controllers/views.js'
import upload from '../Helpers/fileHelpers.js'
import {likeVideoController, getAllLikeVideoController,deleteLikeVideoController} from '../controllers/likeVideo.js'
import {watchLaterController, getAllwatchLaterController, deleteWatchLaterController} from '../controllers/watchLater.js'
import {HistoryController, getAllHistoryController, deleteHistoryController} from '../controllers/History.js'

const routes = express.Router();

routes.post("/uploadvideo", upload.single("file"), uploadvideo);
routes.get("/getvideos", getAllvideos);
routes.patch('/like/:id', likeController);
routes.patch('/view/:id', viewController);

routes.post('/likeVideo', likeVideoController)
routes.get('/getAllLikeVideo', getAllLikeVideoController)
routes.delete('/deleteLikedVideo/:videoId/:Viewer', deleteLikeVideoController)


routes.post('/watchLater', watchLaterController)
routes.get('/getAllwatchLater', getAllwatchLaterController);
routes.delete('/deleteWatchLater/:videoId/:Viewer', deleteWatchLaterController)

routes.post('/History', HistoryController)
routes.get('/getAllHistory', getAllHistoryController);
routes.delete('/deleteHistory/:userId', deleteHistoryController)

export default routes;