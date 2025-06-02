import express from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { deleteUrlController, getAllUserUrls } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/urls', authMiddleware, getAllUserUrls);
router.delete('/:id', authMiddleware, deleteUrlController);

export default router;