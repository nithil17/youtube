
import Video from "../models/Video.js";
import Channel from "../models/Channel.js";

// Get all videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single video
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found"
      });
    }

    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add video
const addVideo = async (req, res) => {
  try {
    const selectedChannel = await Channel.findById(req.body.channelId);

    if (!selectedChannel) {
      return res.status(404).json({
        message: "Channel not found"
      });
    }

    const video = await Video.create({
      title: req.body.title,
      description: req.body.description,
      thumbnail: req.body.thumbnail,
      videoUrl: req.body.videoUrl,
      channel: selectedChannel.channelName,
      channelId: selectedChannel._id,
      uploader: req.user.username || "",
      category: req.body.category,
      views: req.body.views || 0,
      owner: req.user.id
    });

    await Channel.findByIdAndUpdate(selectedChannel._id, {
      $push: {
        videos: video._id
      }
    });

    res.status(201).json(video);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
};

// Update video
const updateVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found"
      });
    }

    if (
      video.owner &&
      video.owner.toString() !== req.user.id
    ) {
      return res.status(403).json({
        message: "Unauthorized"
      });
    }

    Object.assign(video, req.body);

    await video.save();

    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete video
const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found"
      });
    }

    if (
      video.owner &&
      video.owner.toString() !== req.user.id
    ) {
      return res.status(403).json({
        message: "Unauthorized"
      });
    }

    await Channel.findByIdAndUpdate(video.channelId, {
      $pull: {
        videos: video._id
      }
    });

    await Video.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Video deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Like video
const likeVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found"
      });
    }

    video.likes += 1;

    await video.save();

    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Dislike video
const dislikeVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found"
      });
    }

    video.dislikes += 1;

    await video.save();

    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get videos by channel
const getVideosByChannel = async (req, res) => {
  try {
    const videos = await Video.find({
      channelId: req.params.channel
    }).sort({ createdAt: -1 });

    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export {
  getAllVideos,
  getVideoById,
  addVideo,
  updateVideo,
  deleteVideo,
  likeVideo,
  dislikeVideo,
  getVideosByChannel
};

