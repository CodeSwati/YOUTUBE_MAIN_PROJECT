import express from 'express'

import { deleteComment, editComment, getComment, postComment } from '../controllers/comments.js';

const router = express.Router()

router.post('/post',postComment);
router.get('/get',getComment)
router.delete('/delete/:id',deleteComment)
router.patch('/edit/:id',editComment)

export default router;