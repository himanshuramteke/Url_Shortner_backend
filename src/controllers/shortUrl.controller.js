import { APP_URL } from "../config/serverConfig.js";
import { getShortUrl } from "../dao/shortUrl.dao.js";
import { createShortUrlServiceWithoutUser, createShortUrlServiceWithUser } from "../services/shortUrl.service.js";
import wrapAsync from '../utils/tryCatchWrapper.js'

export const createShortUrlController = wrapAsync(async (req, res) => {
   const data = req.body;
   let shortUrl

   if(req.user) {
    console.log('Creating URL for user ID:', req.user._id);
    shortUrl = await createShortUrlServiceWithUser(data.url, req.user._id, data.slug)
   } else {
    shortUrl = await createShortUrlServiceWithoutUser(data.url)
   }

   res.status(200).json({shortUrl: APP_URL + shortUrl});
});

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
    const { id } = req.params;
    const url = await getShortUrl(id);
    if(!url) {
        return res.status(404).json({error: 'Short URL not found'});
    }
    res.redirect(url.full_url);
});

export const createCustomShortUrlController = wrapAsync(async (req, res) => {
    const {url,slug} = req.body
    const shortUrl = await createShortUrlServiceWithUser(url,customUrl)
    res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
})