const mongoose = require("mongoose")

const videoSchema = new mongoose.Schema({
    title:String,

    channel:String,

    views:String,

    thumbnail:String,

    category:String
})

module.exports = mongoose.model("Video", videoSchema);