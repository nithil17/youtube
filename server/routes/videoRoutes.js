const express = require("express");

const router = express.Router();

const {

    getAllVideos,

    getVideoById,

    addVideo,

    deleteVideo,
updateVideo

} = require("../controllers/videoController");

router.get("/", getAllVideos);

router.get("/:id", getVideoById);

router.post("/", addVideo);

router.put("/:id", updateVideo);

router.delete("/:id", deleteVideo);

router.get("/channel/:channel",  getVideosByChannel);

module.exports = router;