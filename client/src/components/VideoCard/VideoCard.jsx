import React from 'react'
import "./VideoCard.css"
import { Link } from 'react-router-dom'

const VideoCard = ({ video }) => {
  return (
    <Link 
      to={`/watch/${video.id}`}
      className='video-link'
    >
      <div className="video-card">
        <img
          src={video.thumbnail}
          alt={video.title}
          className='video-thumbnail'
        />
        <div>
          <h3>{video.title}</h3>

          <p>{video.channel}</p>

          <p>{video.views} views</p>

        </div>

      </div>
    </Link>

  )
}

export default VideoCard