import express from 'express'
import {uploadvideo , getAllvideos} from '../controllers/video.js'
import upload from '../Helpers/fileHelpers.js'
const routes = express.Router();

routes.post("/uploadvideo", upload.single("file"), uploadvideo);
routes.get("/getvideos", getAllvideos)

export default routes;