import { nanoid } from "nanoid";
import { JWT_SECRET } from "../config/serverConfig.js";
import jsonwebtoken from "jsonwebtoken";

export const generateNanoId = (length) => {
    return nanoid(length);
}

export const signToken = (payload) => {
    return jsonwebtoken.sign(payload, JWT_SECRET, {expiresIn: '1h'})
}

export const verifyToken = (token) => {
    const decoded = jsonwebtoken.verify(token, JWT_SECRET);
    console.log(decoded.id);
    return decoded.id;
}