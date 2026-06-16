// =====================
// Imports
// =====================

import mongoose from "mongoose";

// =====================
// Video Schema
// =====================

const videoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: [100, "Maximum 100 characters"]
    },

    description: {
        type: String,
        maxlength: [1000, "Maximum 1000 characters"],
        default: ""
    },

    videoUrl: {
        type: String,
        required: [true, "Video URL is required"]
    },

    thumbnail: {
        type: String,
        required: true
    },

    channel: {
        type: String,
        required: [true, "Thumbnail is required"]
    },

    channelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Channel"
    },


    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    uploader: {
        type: String,
        default: ""
    },

    category: {
        type: String,
        required: [true, "Category is required"]
    },

    views: {
        type: Number,
        default: 0
    },

    likes: {
        type: Number,
        default: 0
    },

    dislikes: {
        type: Number,
        default: 0
    },

    uploadDate: {
        type: Date,
        default: Date.now
    }

},

    {

        timestamps: true

    });

// =====================
// Export
// =====================

const Video = mongoose.model("Video", videoSchema);

export default Video;