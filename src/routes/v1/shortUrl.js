import express from 'express';
import { createShortUrlController, redirectFromShortUrl } from '../../controllers/shortUrl.controller.js';

const router = express.Router();

router.post('/', createShortUrlController);
router.get('/:id', redirectFromShortUrl);

export default router;
