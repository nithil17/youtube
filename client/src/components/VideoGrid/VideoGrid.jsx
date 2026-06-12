import React, { useEffect, useState } from 'react'
import VideoCard from "../VideoCard/VideoCard"

import "./VideoGrid.css"
import { getVideos } from "../../services/videoServices";

const VideoGrid = ({

    searchText,
    selectedCategory

}) => {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getVideos()
            .then((data) => {
                setVideos(data);


            })

            .catch(() => {
                setError("Failed to load videos.");
            })

            .finally(() => {
                setLoading(false);
            })
    }, [])


    const filteredVideos = videos.filter((video) => {

        const matchesSearch =
            video.title
                .toLowerCase()
                .includes(searchText.toLowerCase())

            ||

            video.channel
                .toLowerCase()
                .includes(searchText.toLowerCase())

        const matchesCategory =

            selectedCategory === "All"

            ||

            video.category === selectedCategory;


        return matchesSearch && matchesCategory;
    });

    if (loading) {

        return (

            <h2>Loading Videos...</h2>

        );

    }
    console.log(filteredVideos);
    return (
        <div className="video-grid">

            {


                filteredVideos.map((video) => {
                    return (
                        <VideoCard
                            key={video.id}
                            video={video}
                        />
                    )
                })
            }
        </div>
    )
}

export default VideoGrid