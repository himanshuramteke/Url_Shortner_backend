import { APP_URL } from "../config/serverConfig.js";
import { createShortUrlService } from "../services/shortUrl.service.js";

export const createShortUrlController = async (req, res) => {
    const { url } = req.body;
    const shortUrl = await createShortUrlService(url);
    res.send(APP_URL + shortUrl)
}