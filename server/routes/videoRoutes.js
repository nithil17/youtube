const express = require("express");

const router = express.Router();

const {
  getAllVideos,
  getVideoById,
  addVideo,
  updateVideo,
  deleteVideo,
  getVideosByChannel
} = require("../controllers/videoController");

router.get("/", getAllVideos);

router.get("/channel/:channel", getVideosByChannel);

router.get("/:id", getVideoById);

router.post("/", addVideo);

router.put("/:id", updateVideo);

router.delete("/:id", deleteVideo);

module.exports = router;