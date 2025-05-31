import { getAllUserUrlsDao } from "../dao/user.dao.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const getAllUserUrls = wrapAsync(async(req, res) => {
   const {_id} = req.user;
   console.log("fetching URLs from user ID:", _id);
   const urls = await getAllUserUrlsDao(_id);
   console.log("urls found:", urls.length);
   res.status(200).json({message: "success", urls})  ;
})