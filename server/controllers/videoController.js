const { getVideos } = require("../../client/src/services/videoServices");
const videos = require("../data/videos");

const getAllVideos = (req, res)=> {

res.status(200).json(videos);
};

module.exports = {

getAllVideos
}


getVideoByID = (req, res)=>{

    const id = Number(req.params.id);

    const video = videos.find((video) => {
        return video.id === id;
    })

    if(!video){
        res.status(404).json({
            message: "video not found"
        })
    }

    res.status(200).json(video);
};
