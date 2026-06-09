import React from 'react'
import VideoCard from '../VideoCard/VideoCard'
import { videos } from '../../utils/videos'

const VideoGrid = () => {
  return (
    <>
        {
            videos.map((video)=>{
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