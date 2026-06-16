// =====================
// Imports
// =====================

import mongoose from "mongoose";

// =====================
// User Schema
// =====================

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Username must be at least 3 characters"],
        maxlength: [30, "Username cannot exceed 30 characters"]
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Enter a valid email"
        ]
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"]
    },

    role: {
        type: String,
        default: "user"
    },

    avatar: {
        type: String,
        default: ""
    },

    channels: [

        {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Channel"

        }

    ]

},

    {

        timestamps: true

    });

// =====================
// Export
// =====================

const User = mongoose.model("User", userSchema);

export default User;