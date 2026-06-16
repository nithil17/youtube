// Imports
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { likeVideo, dislikeVideo } from "../../services/videoService";
import "./VideoActions.css";

function VideoAction({ videoId, likes = 0, dislikes = 0 }) {



    const [currentLikes, setCurrentLikes] = useState(likes);
    const [currentDislikes, setCurrentDislikes] = useState(dislikes);
     const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {

        setCurrentLikes(likes);
        setCurrentDislikes(dislikes);

    }, [likes, dislikes]);

    const handleLike = async () => {

        if (!isAuthenticated) {
            alert("Please login to like videos.");
            return;
        }

        try {

            const updatedVideo = await likeVideo(videoId);

            setCurrentLikes(updatedVideo.likes);
            setCurrentDislikes(updatedVideo.dislikes);

        } catch (error) {

            alert("Please login to like videos.");

        }

    };

    const handleDislike = async () => {

        if (!isAuthenticated) {
            alert("Please login to dislike videos.");
            return;
        }

        try {

            const updatedVideo = await dislikeVideo(videoId);

            setCurrentLikes(updatedVideo.likes);
            setCurrentDislikes(updatedVideo.dislikes);

        } catch (error) {

            alert("Please login to dislike videos.");

        }

    };

    return (

        <div className="video-actions">

            <button onClick={handleLike}>

                👍 {currentLikes}

            </button>

            <button onClick={handleDislike}>

                👎 {currentDislikes}

            </button>

        </div>

    );

}

export default VideoAction;