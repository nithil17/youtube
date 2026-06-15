import React, { useEffect, useState } from 'react'
import VideoCard from "../VideoCard/VideoCard"

import { getVideos } from '../../services/videoService'
import Loading from '../Loading/Loading'

import "./VideoGrid.css"
import Error from '../Error/Error'


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


                const data = await getVideos();

                console.log("Videos:", data);

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

        return <Loading />

    }

    if (error) {

        return <Error
            message={error}

        />

    }


    return (
        <div className="video-grid">

            {


                filteredVideos.map((video) => {
                    return (
                        <VideoCard
                            key={video._id}
                            video={video}
                        />
                    )
                })
            }
        </div>
    )
}

export default VideoGrid