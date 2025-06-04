import User from "../models/user.model.js";
import shortUrl from "../models/shortUrl.model.js"

export const findUserByEmail = async (email) => {
    return await User.findOne({email});
}

export const findUserByEmailByPassword = async (email) => {
    return await User.findOne({email}).select('+password');
}

export const findUserById = async (id) => {
    return await User.findById(id);
}

export const createUser = async (name, email, password) => {
    const newUser = new User({name, email, password});
    await newUser.save();
    return newUser;
}

export const getAllUserUrlsDao = async (id) => {
    return await shortUrl.find({user: id})
}

export const deleteUrlDao = async (urlId, userId) => {
    const deletedUrl = await shortUrl.findOneAndDelete({
        _id: urlId,
        user: userId
    });
    
    if (!deletedUrl) {
        throw new Error('URL not found or not owned by user');
    }
    
    return { 
        success: true,
        message: 'URL deleted successfully',
        deletedUrl
    };
};