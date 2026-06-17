
import Video from "../models/Video.js";
import Channel from "../models/Channel.js";
import Comment from "../models/Comment.js";

const serializeVideo = (video) => {
  const videoObject = video.toObject ? video.toObject() : video;

  return {
    ...videoObject,
    likes: Array.isArray(videoObject.likedBy)
      ? videoObject.likedBy.length
      : videoObject.likes || 0,
    dislikes: Array.isArray(videoObject.dislikedBy)
      ? videoObject.dislikedBy.length
      : videoObject.dislikes || 0
  };
};

// Get all videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.status(200).json(videos.map(serializeVideo));
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

    res.status(200).json(serializeVideo(video));
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Add video
const addVideo = async (req, res) => {
  try {
    const {
      title,
      videoUrl,
      thumbnail,
      category,
      channelId
    } = req.body;

    if (!title?.trim() || !videoUrl?.trim() || !thumbnail?.trim() || !category?.trim() || !channelId) {
      return res.status(400).json({
        message: "Title, video URL, thumbnail, category, and channel are required"
      });
    }

    const selectedChannel = await Channel.findById(channelId);

    if (!selectedChannel) {
      return res.status(404).json({
        message: "Channel not found"
      });
    }

    // Allow upload only to the logged-in user's own channel
    if (selectedChannel.owner.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You can upload videos only to your own channel"
      });
    }

    const video = await Video.create({
      title: title.trim(),
      description: req.body.description?.trim() || "",
      thumbnail: thumbnail.trim(),
      videoUrl: videoUrl.trim(),
      channel: selectedChannel.channelName,
      channelId: selectedChannel._id,
      uploader: req.user.username || "User",
      category: category.trim(),
      views: Number(req.body.views) || 0,
      owner: req.user.id
    });

    await Channel.findByIdAndUpdate(selectedChannel._id, {
      $push: {
        videos: video._id
      }
    });

    res.status(201).json(serializeVideo(video));

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

    if (video.owner && video.owner.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized"
      });
    }

    const allowedFields = [
      "title",
      "description",
      "thumbnail",
      "videoUrl",
      "category",
      "views"
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        video[field] = req.body[field];
      }
    });

    await video.save();

    res.status(200).json(serializeVideo(video));

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

    if (video.owner && video.owner.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized"
      });
    }

    await Channel.findByIdAndUpdate(video.channelId, {
      $pull: {
        videos: video._id
      }
    });

    await Comment.deleteMany({
      videoId: video._id
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
// Like or unlike video
const likeVideo = async (req, res) => {

  try {

    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found"
      });
    }

    const userId = req.user.id;

    // Remove like if user already liked
    if (video.likedBy.some(id => id.toString() === userId)) {

      video.likedBy.pull(userId);

    }

    // Add like and remove dislike
    else {

      video.likedBy.push(userId);
      video.dislikedBy.pull(userId);

    }

    await video.save();

    res.status(200).json(serializeVideo(video));

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// Dislike video
// Dislike or remove dislike
const dislikeVideo = async (req, res) => {

  try {

    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found"
      });
    }

    const userId = req.user.id;

    // Remove dislike if user already disliked
    if (video.dislikedBy.some(id => id.toString() === userId)) {

      video.dislikedBy.pull(userId);

    }

    // Add dislike and remove like
    else {

      video.dislikedBy.push(userId);
      video.likedBy.pull(userId);

    }

    await video.save();

    res.status(200).json(serializeVideo(video));

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

    res.status(200).json(videos.map(serializeVideo));

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

