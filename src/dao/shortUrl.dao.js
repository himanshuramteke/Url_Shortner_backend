import urlSchema from '../models/shorturl.model.js';

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
    try{
        const newUrl = new urlSchema({
            full_url: longUrl,
            short_url: shortUrl,
        });
        if(userId) {
            newUrl.user_id = userId;
        }
        newUrl.save();
    }catch (err) {
        if(err.code == 11000){
            throw new ConflictError("Short URL already exists")
        }
        throw new Error(err)
    }
}

export const getShortUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({short_url: shortUrl},{$inc: {clicks: 1}});
}