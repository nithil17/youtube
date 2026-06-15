// =====================
// Imports
// =====================

import mongoose from "mongoose";

// =====================
// Channel Schema
// =====================

const channelSchema = new mongoose.Schema({

    channelName:{
        type:String,
        required:true
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    description:{
        type:String,
        default:""
    },

    channelBanner:{
        type:String,
        default:""
    },

    subscribers:{
        type:Number,
        default:0
    },

    videos:[

        {

            type:mongoose.Schema.Types.ObjectId,

            ref:"Video"

        }

    ]

},

{

    timestamps:true

});

// =====================
// Export
// =====================

const Channel = mongoose.model(

    "Channel",

    channelSchema

);

export default Channel;