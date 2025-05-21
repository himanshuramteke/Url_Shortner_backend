import express from 'express';
import shortUrlRouter from './shortUrl.js';

const router = express.Router();

router.use('/create', shortUrlRouter);

export default router;