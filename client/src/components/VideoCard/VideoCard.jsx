import React from 'react'

const VideoCard = ({video}) => {
  return (
    <div>
        <img 
        src={video.thumbnail} 
        alt={video.title}
        />
          <h3>{video.title}</h3>

            <p>{video.channel}</p>

            <p>{video.views} views</p>
    </div>
  )
}

export default VideoCard