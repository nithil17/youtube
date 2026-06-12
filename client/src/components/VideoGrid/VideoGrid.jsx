import React, { useEffect, useState } from 'react'
import VideoCard from "../VideoCard/VideoCard"

import "./VideoGrid.css"


const VideoGrid = ({

    searchText,
    selectedCategory

}) => {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/videos")

                const data = await response.json();

                setVideos(data);

            } catch (error) {

                setError("Failed to load Videos")

            } finally {
                setLoading(false);
            }
        }

        fetchVideos();
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

    if (error) {

        return <h2>{error}</h2>;

    }


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