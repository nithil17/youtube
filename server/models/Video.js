const mongoose = require("mongoose")

const videoSchema = new mongoose.Schema({
    title: {

        type: String,

        required: true

    },

    channel: {

        type: String,

        required: true

    },

    views: {

        type: String,

        default: "0"

    },

    thumbnail: {

        type: String,

        required: true

    },

    category: {

        type: String,

        required: true

    }
})

module.exports = mongoose.model("Video", videoSchema);