import React from 'react'
import { useParams } from "react-router-dom";
import { videos } from '../../utils/videos';

const VideoPlayer = () => {

  const {id} = useParams()

  const  selectedVideo = videos.find((video)=>{
    return video.id === Number(id);
  })
  
  
  return (
    <div className='video-player'>
      
      <img 
      src={selectedVideo.thumbnail} 
      alt={selectedVideo.title} />

      <h2>
        {selectedVideo.title}
      </h2>

      <p>
        {selectedVideo.channel}

      </p>

      <p>{selectedVideo.views}Views</p>
      
      
      </div>
  )
}

export default VideoPlayer