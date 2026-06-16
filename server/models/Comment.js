// =====================
// Imports
// =====================

import mongoose from "mongoose";

// =====================
// Comment Schema
// =====================

const commentSchema = new mongoose.Schema({

    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    user: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: [true, "Comment is required"],
        trim: true,
        maxlength: [500, "Maximum 500 characters"]
    }

},

    {

        timestamps: true

    });

// =====================
// Export
// =====================

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;