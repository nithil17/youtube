// =====================
// Imports
// =====================

import mongoose from "mongoose";

// =====================
// Video Schema
// =====================

const videoSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        default:""
    },

    videoUrl:{
        type:String,
        default:""
    },

    thumbnail:{
        type:String,
        required:true
    },

    channel:{
        type:String,
        required:true
    },

    channelId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Channel"
    },

    uploader:{
        type:String,
        default:""
    },

    category:{
        type:String,
        required:true
    },

    views:{
        type:Number,
        default:0
    },

    likes:{
        type:Number,
        default:0
    },

    dislikes:{
        type:Number,
        default:0
    },

    uploadDate:{
        type:Date,
        default:Date.now
    }

},

{

    timestamps:true

});

// =====================
// Export
// =====================

const Video = mongoose.model("Video",videoSchema);

export default Video;