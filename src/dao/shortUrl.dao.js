import shortUrl from '../models/shortUrl.model.js';
import { ConflictError } from '../utils/errorHandler.js';

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
    try{
        const newUrl = new shortUrl({
            full_url: longUrl,
            short_url: shortUrl,
        });
        if(userId) {
            newUrl.user = userId;
            console.log("Setting user ID for URL:", userId);
        }
        const savedUrl = await newUrl.save();
        console.log("saved url with data", savedUrl);
        return savedUrl;
    }catch (err) {
        if(err.code == 11000){
            throw new ConflictError("Short URL already exists")
        }
        throw new Error(err.message ||err);
    }
}

export const getShortUrl = async (shortUrl) => {
    return await shortUrl.findOneAndUpdate(
        {short_url: shortUrl},
        {$inc: {clicks: 1}},
        {new: true}
    );
}

export const getCustomShortUrl = async (slug) => {
    return await shortUrl.findOne({short_url:slug});
}