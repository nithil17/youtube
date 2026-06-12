import React, { useEffect, useState } from 'react'
import VideoCard from '../VideoCard/VideoCard'

import "./VideoGrid.css"
import { getVideos } from '../../services/videoServices';

const VideoGrid = ({

    searchText,
    selectedCategory

}) => {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(())=>{
        getVideos().then((data)=>{
            setVideos(data);
            setLoading(false);
        }
        )
    }


    const filteredVideos = videos.filter((video)=>{

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

            video.category===selectedCategory;


        return matchesSearch && matchesCategory;
      });


  return (
    <div className="video-grid">
        {
            filteredVideos.map((video)=>{
                 return(
                    <VideoCard
                    key={video.id}
                    video={video}
                    />
                 )
            }

        )
        }
    </div>
  )
}

export default VideoGrid