import express from 'express'
import {uploadvideo , getAllvideos} from '../controllers/video.js'
import {likeController } from '../controllers/like.js'
import upload from '../Helpers/fileHelpers.js'
import {likeVideoController, getAllLikeVideoController} from '../controllers/likeVideo.js'
const routes = express.Router();

routes.post("/uploadvideo", upload.single("file"), uploadvideo);
routes.get("/getvideos", getAllvideos);
routes.patch('/like/:id', likeController);

routes.post('/likeVideo', likeVideoController)
routes.post('/getAllLikeVideo', getAllLikeVideoController)

export default routes;