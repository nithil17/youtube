const express = require("express");

const router = express.Router();

const {

    getAllVideos,

    getVideoById,

    addVideo,

    deleteVideo

} = require("../controllers/videoController");

router.get("/", getAllVideos);

router.get("/:id", getVideoById);

router.post("/", addVideo);

router.delete("/:id", deleteVideo);

module.exports = router;