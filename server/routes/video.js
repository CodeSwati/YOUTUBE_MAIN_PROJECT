import express from 'express'
import {uploadvideo , getAllvideos} from '../controllers/video.js'
import {likeController } from '../controllers/like.js'
import {viewController } from '../controllers/views.js'
import upload from '../Helpers/fileHelpers.js'
import {likeVideoController, getAllLikeVideoController,deleteLikeVideoController} from '../controllers/likeVideo.js'
import {watchLaterController, getAllwatchLaterController, deleteWatchLaterController} from '../controllers/watchLater.js'
import {HistoryController, getAllHistoryController, deleteHistoryController} from '../controllers/History.js'
import auth from '../middleware/auth.js'

const routes = express.Router();

routes.post("/uploadvideo",auth, upload.single("file"), uploadvideo);
routes.get("/getvideos", getAllvideos);
routes.patch('/like/:id',auth, likeController);
routes.patch('/view/:id', viewController);

routes.post('/likeVideo',auth, likeVideoController)
routes.get('/getAllLikeVideo', getAllLikeVideoController)
routes.delete('/deleteLikedVideo/:videoId/:Viewer',auth, deleteLikeVideoController)


routes.post('/watchLater',auth, watchLaterController)
routes.get('/getAllwatchLater', getAllwatchLaterController);
routes.delete('/deleteWatchLater/:videoId/:Viewer',auth, deleteWatchLaterController)

routes.post('/History',auth, HistoryController)
routes.get('/getAllHistory', getAllHistoryController);
routes.delete('/deleteHistory/:userId',auth, deleteHistoryController)

export default routes;