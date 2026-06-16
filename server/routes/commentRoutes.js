// Imports
import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import{
getCommentsByVideo,
addComment,
updateComment,
deleteComment
}from "../controllers/commentController.js";

const router=express.Router();

// Public
router.get("/:videoId",getCommentsByVideo);

// Protected
router.post("/",authMiddleware,addComment);
router.put("/:id",authMiddleware,updateComment);
router.delete("/:id",authMiddleware,deleteComment);

export default router;