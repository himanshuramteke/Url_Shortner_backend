import { deleteUrlDao, getAllUserUrlsDao } from "../dao/user.dao.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const getAllUserUrls = wrapAsync(async (req, res) => {
  const { _id } = req.user;
  console.log("fetching URLs from user ID:", _id);
  const urls = await getAllUserUrlsDao(_id);
  console.log("urls found:", urls.length);
  res.status(200).json({ message: "success", urls });
});

export const deleteUrlController = async (req, res) => {
  try {
    const result = await deleteUrlDao(req.params.id, req.user.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
