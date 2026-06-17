import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { likeVideo, dislikeVideo } from "../../services/videoService";
import "./VideoActions.css";

function VideoAction({ videoId, likes = 0, dislikes = 0 }) {
  const getCount = (value) =>
    Array.isArray(value) ? value.length : Number(value) || 0;

  const [currentLikes, setCurrentLikes] = useState(getCount(likes));
  const [currentDislikes, setCurrentDislikes] = useState(getCount(dislikes));
  const { isAuthenticated } = useContext(AuthContext);

  const handleLike = async () => {
    if (!isAuthenticated) {
      alert("Please login to like videos.");
      return;
    }

    try {
      const updatedVideo = await likeVideo(videoId);

      setCurrentLikes(getCount(updatedVideo.likes));
      setCurrentDislikes(getCount(updatedVideo.dislikes));
    } catch (error) {
      alert(error.message || "Please login to like videos.");
    }
  };

  const handleDislike = async () => {
    if (!isAuthenticated) {
      alert("Please login to dislike videos.");
      return;
    }

    try {
      const updatedVideo = await dislikeVideo(videoId);

      setCurrentLikes(getCount(updatedVideo.likes));
      setCurrentDislikes(getCount(updatedVideo.dislikes));
    } catch (error) {
      alert(error.message || "Please login to dislike videos.");
    }
  };

  return (
    <div className="video-actions">
      <button onClick={handleLike}>Like {currentLikes}</button>
      <button onClick={handleDislike}>Dislike {currentDislikes}</button>
    </div>
  );
}

export default VideoAction;
