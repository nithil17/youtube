// Imports
import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import{
getAllVideos,
getVideoById,
addVideo,
updateVideo,
deleteVideo,
likeVideo,
dislikeVideo,
getVideosByChannel
}from "../controllers/videoController.js";

const router=express.Router();

// Public routes

router.get("/",getAllVideos);

router.get("/channel/:channel",getVideosByChannel);

router.get("/:id",getVideoById);

// Protected routes

router.post("/",authMiddleware,addVideo);

router.put("/:id",authMiddleware,updateVideo);

router.delete("/:id",authMiddleware,deleteVideo);

router.put("/like/:id",authMiddleware,likeVideo);

router.put("/dislike/:id",authMiddleware,dislikeVideo);

export default router;
