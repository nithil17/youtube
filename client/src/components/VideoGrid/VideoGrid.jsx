import React from 'react'
import VideoCard from '../VideoCard/VideoCard'
import { videos } from '../../utils/videos'
import "./VideoGrid.css"

const VideoGrid = ({
    
    searchText,
    selectedCategory

}) => {

    console.log(selectedCategory);
    // adding logic to filter videos according to categories

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