import express from 'express'
import {uploadvideo} from '../controllers/video.js'
import upload from '../Helpers/fileHelpers.js'
const routes = express.Router();

routes.post("/uploadvideo", upload.single("file"), uploadvideo);

export default routes;