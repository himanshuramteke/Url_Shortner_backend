import { cookieOptions } from "../config/cookie.config.js";
import { loginUser, registerUser } from "../services/auth.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const registerUserController = wrapAsync(async (req, res) => {
    const {name, email, password} = req.body;
    const {token, user} = await registerUser(name, email, password);
    req.user = user;
    res.cookie('accessToken', token, cookieOptions);
    res.status(200).json({message: "User registered successfully"});
});

export const loginUserController = wrapAsync(async (req, res) => {
    const {email, password} = req.body
    const {token,user} = await loginUser(email, password)
    req.user = user
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({user:user,message:"login success"})
})

export const logoutUserController = wrapAsync(async (req, res) => {
    res.clearCookie('accessToken', cookieOptions);
    res.status(200).json({message: "User logged out successfully"});
});


export const get_current_user = wrapAsync( async (req, res) => {
    res.status(200).json({user:req.user})
});