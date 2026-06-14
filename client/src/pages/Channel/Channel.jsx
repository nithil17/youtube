import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideosByChannel } from "../../services/videoService";
import VideoCard from "../../components/VideoCard/VideoCard";
import "./Channel.css";

function Channel() {
  const { channel } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadVideos();
  }, [channel]);

  const loadVideos = async () => {
    try {
      const data = await getVideosByChannel(channel);
      setVideos(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="channel-page">
      <h2>{channel}</h2>

      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard
            key={video._id}
            video={video}
          />
        ))}
      </div>
    </div>
  );
}

export default Channel;