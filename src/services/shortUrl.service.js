import { generateNanoId } from "../utils/helper.js"
import { saveShortUrl } from "../dao/shortUrl.dao.js";

export const createShortUrlServiceWithoutUser = async (url) => {
    const shortUrl = await generateNanoId(7);
    await saveShortUrl(shortUrl, url);
    return shortUrl;
}

export const creteShortUrlServiceWithUser = async (url, userId) => {
    const shortUrl = await generateNanoId(7);
    await saveShortUrl(url, shortUrl, userId);
    return shortUrl;
}