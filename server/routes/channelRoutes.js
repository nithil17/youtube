// Imports
import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
    createChannel,
    getAllChannels,
    getChannelById,
    updateChannel,
    deleteChannel,
    getChannelVideos
} from "../controllers/channelController.js";

const router = express.Router();

// Public
router.get("/", getAllChannels);
router.get("/:id", getChannelById);
router.get("/:id/videos", getChannelVideos);

// Protected
router.post("/", authMiddleware, createChannel);

router.put("/:id", authMiddleware, updateChannel);
router.delete("/:id", authMiddleware, deleteChannel);

export default router;