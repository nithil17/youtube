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

  const [likes, setLikes] = useState(300);
  const [disLikes, setDislikes] = useState(14);

  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Alice",
      text: "Greate Tutorial"
    },
    {
      id: 2,
      user: "Bob",
      text: "Nice Video"
    },
    {
      id: 3,
      user: "John",
      text: "Okay Okay"
    },
    {
      id: 4,
      user: "Smith",
      text: "Addipoli"
    }
  ])

  const [newComment, setNewComment] = useState("");


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

          <div className='video-actions'>
            <button
              onClick={() => setLikes(likes + 1)}
            >👍 {likes}
            </button>

            <button
              onClick={() => setDislikes(disLikes + 1)}
            >👎 {disLikes}
            </button>
          </div>



            <div className='comment-input'>
              <input
                type="text"
                placeholder='Add a comment...'
                value={newComment}
                onChange={(event) => {
                  setNewComment(event.target.value)
                }}
              />

              <button>Comment</button>
            </div>

            <div className='comments-section' >
              <h3>Comments </h3>
              {
                comments.map((comment) => {
                  return (
                    <div className='comment-card'
                      key={comment.id}>
                      <h4>{comment.user}</h4>
                      <p>{comment.text}</p>
                    </div>
                  )
                })
              }
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