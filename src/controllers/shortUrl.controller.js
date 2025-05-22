import { APP_URL } from "../config/serverConfig.js";
import { getShortUrl } from "../dao/shortUrl.dao.js";
import { createShortUrlServiceWithoutUser } from "../services/shortUrl.service.js";

export const createShortUrlController = async (req, res) => {
    const { url } = req.body;
    const shortUrl = await createShortUrlServiceWithoutUser(url);
    res.send(APP_URL + shortUrl)
}

export const redirectFromShortUrl = async (req, res) => {
    const { id } = req.params;
    const url = await getShortUrl(id);
    console.log(url);
    res.redirect(url.full_url);
}