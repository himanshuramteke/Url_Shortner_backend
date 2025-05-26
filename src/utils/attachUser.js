import { verifyToken } from "./helper.js";

export const attachUser = async (req, res, next) => {
    const token = await req.cookies.token;
    if(!token) return next();

    try {
        const decoded = verifyToken(token);
        const user = await findUserById(decoded);
        if(!user) return next();
        req.user = user
        next()
    } catch (error) {
        console.log(error);
        next();
    }
}