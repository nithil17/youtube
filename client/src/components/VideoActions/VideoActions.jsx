import React from 'react'
import { useState } from 'react';

import "./VideoActions.css"

function VideoAction() {

  const [likes, setLikes] = useState(300);
  const [disLikes, setDislikes] = useState(14);
  return (
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

  )
}

export default VideoAction