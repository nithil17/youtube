const Video = require("../models/Video");

// GET ALL VIDEOS

const getAllVideos = async (req, res) => {

    try {

        const videos = await Video.find();

        console.log("Videos fetched from MongoDB:");
        console.log(videos);

        res.status(200).json(videos);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// GET VIDEO BY ID

const getVideoById = async (req, res) => {

    try {

        const video = await Video.findById(req.params.id);

        if (!video) {

            return res.status(404).json({

                message: "Video not found"

            });

        }

        res.status(200).json(video);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ADD VIDEO

const addVideo = async (req, res) => {

    try {

        const video = new Video(req.body);

        const savedVideo = await video.save();

        res.status(201).json(savedVideo);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// DELETE VIDEO

const deleteVideo = async (req, res) => {

    try {

        const deletedVideo = await Video.findByIdAndDelete(req.params.id);

        if (!deletedVideo) {

            return res.status(404).json({

                message: "Video not found"

            });

        }

        res.status(200).json({

            message: "Video deleted"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

module.exports = {

    getAllVideos,
    getVideoById,
    addVideo,
    deleteVideo

};