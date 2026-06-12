const videos = require("../models/Video");

// GET ALL VIDEOS

const getAllVideos = (req, res) => {

    const videos= await Videos.find();

    res.status(200).json(videos);

};

// GET SINGLE VIDEO

const getVideoById = (req, res) => {

    const id = Number(req.params.id);

    const video = videos.find((video) => {

        return video.id === id;

    });

    if (!video) {

        return res.status(404).json({

            message: "Video not found"

        });

    }

    res.status(200).json(video);

};

// ADD VIDEO

const addVideo = (req, res) => {

    const newVideo = {

        id: Date.now(),

        ...req.body

    };

    videos.push(newVideo);

    res.status(201).json(newVideo);

};

// DELETE VIDEO

const deleteVideo = (req, res) => {

    const id = Number(req.params.id);

    const index = videos.findIndex((video) => {

        return video.id === id;

    });

    if (index === -1) {

        return res.status(404).json({

            message: "Video not found"

        });

    }

    videos.splice(index, 1);

    res.status(200).json({

        message: "Video deleted"

    });

};

module.exports = {

    getAllVideos,

    getVideoById,

    addVideo,

    deleteVideo

};