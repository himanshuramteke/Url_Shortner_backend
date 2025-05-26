import express from 'express';
import shortUrlRouter from './shortUrl.js';
import authRouter from './auth.js';
import userRouter from './user.js';

const router = express.Router();

router.use('/create', shortUrlRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);

export default router;