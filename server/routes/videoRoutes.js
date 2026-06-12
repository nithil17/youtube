const express = require("express");

const router = express.Router();

const videos = require("../data/videos");

const {getAllVideos} = require("../controllers/videoController")

router.get("/", getAllVideos);

module.exports = router;