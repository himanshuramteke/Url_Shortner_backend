import { APP_URL } from "../config/serverConfig.js";
import { getShortUrl } from "../dao/shortUrl.dao.js";
import { createShortUrlServiceWithoutUser } from "../services/shortUrl.service.js";
import wrapAsync from '../utils/tryCatchWrapper.js'

export const createShortUrlController = wrapAsync(async (req, res) => {
    const { url } = req.body;
    if(!url) {
        return res.status(400).json({ error: 'URL is required'})
    }
    const shortUrl = await createShortUrlServiceWithoutUser(url);
    res.status(200).json({ shortUrl: APP_URL + shortUrl });
});

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
    const { id } = req.params;
    const url = await getShortUrl(id);
    if(!url) throw new Error('Short URL not found');
    res.redirect(url.full_url);
});

export const createCustomShortUrlController = wrapAsync(async (req, res) => {
    const { url, slug } = req.body;
    const shortUrl = await createShortUrlServiceWithoutUser(url, customUrl);
    res.status(200).json({ shortUrl: APP_URL + shortUrl});
})