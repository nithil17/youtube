import React from 'react'
import { useParams } from "react-router-dom";
import { videos } from '../../utils/videos';
import "./VideoPlayer.css"
import Header from '../../components/Header/Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const VideoPlayer = ({
  searchText,

  setSearchText,

  isSidebarOpen,

  setIsSidebarOpen

}) => {
  const { id } = useParams()
  const selectedVideo = videos.find((video) => {
    return video.id === Number(id);
  })
  const relatedVideos = videos.filter((video) => {
    return video.id !== Number(id);
  })
  return (
    <div>

      <div className="video-player-page">
        <div className="main-video">
          <img
            className="player-thumbnail"
            src={selectedVideo.thumbnail}
            alt={selectedVideo.title}
          />

          <div className='video-info'>
            <h2>{selectedVideo.title}</h2>
            <div className='video-meta'>
              <span>{selectedVideo.channel}</span>
              <span>•</span>
              <span>{selectedVideo.views} Views</span>
            </div>
          </div>

        </div>

        <div className="related-videos">
          <h3>Related Videos</h3>
          {
            relatedVideos.map((video) => {
              return (

                <Link
                to={`/watch/${video.id}`}
                className='related-link'
                >
                  <div
                    className='related-card'
                    key={video.id}>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                    />
                    <div
                      className='related-info'
                    >
                      <h4>{video.title}</h4>
                      <p>{video.channel}</p>
                    </div>
                  </div>
                </Link>


              )
            })
          }
        </div>

      </div>
    </div>
  )
}
export default VideoPlayer