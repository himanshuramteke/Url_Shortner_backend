import express from 'express';
import { createShortUrlController } from '../../controllers/shortUrl.controller.js';

const router = express.Router();

router.post('/', createShortUrlController);

export default router;
