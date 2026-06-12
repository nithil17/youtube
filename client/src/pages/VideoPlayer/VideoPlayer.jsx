import React from 'react'
import { useParams } from "react-router-dom";
import { videos } from '../../utils/videos';
import "./VideoPlayer.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoAction from '../../components/VideoActions/VideoActions';
import CommentSection from '../../components/CommentSection/CommentSection';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';


const VideoPlayer = () => {

  const { id } = useParams();

  const selectedVideo = videos.find((video) => {
    return video.id === Number(id);
  })

  if (!selectedVideo) {

    return <h2>Video Not Found</h2>;

  }

  return (
    <div>

      <div className="video-player-page">

        {/* main video card */}
        <div className="main-video">
          <img
            className="player-thumbnail"
            src={selectedVideo.thumbnail}
            alt={selectedVideo.title}
          />

          {/* video info section */}

          <div className='video-info'>
            <h2>{selectedVideo.title}</h2>
            <div className='video-meta'>
              <span>{selectedVideo.channel}</span>
              <span>•</span>
              <span>{selectedVideo.views} Views</span>
            </div>
          </div>

          {/* video action like and dislike */}
          <VideoAction />

          <CommentSection />



        </div>

        <RelatedVideos />





      </div>
    </div>
  )
}
export default VideoPlayer