import React from 'react'
import VideoCard from '../VideoCard/VideoCard'
import { videos } from '../../utils/videos'

const VideoGrid = ({searchText}) => {

    const filteredVideos = videos.filter((video)=>{
        return(
            video.title.toLowerCase().includes(searchText.toLowerCase())||
            video.channel.toLowerCase().includes(searchText.toLowerCase())
        );
      });
  return (
    <>
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
    </>
  )
}

export default VideoGrid