import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { getVideosByChannel, deleteVideo } from "../../services/videoService";
import { getChannelById } from "../../services/channelService";
import VideoCard from "../../components/VideoCard/VideoCard";

function Channel() {
  const { channel } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  const [channelData, setChannelData] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVideos();
  }, [channel]);

  const loadVideos = async () => {

    try {

      const channelInfo = await getChannelById(channel);
      setChannelData(channelInfo);
      const data = await getVideosByChannel(channelInfo._id);
      setVideos(data);
    }

    catch (error) {
      console.log(error);
    }

    finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this video?")) return;

    try {
      await deleteVideo(id);
      setVideos(videos.filter((video) => video._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="channel-page">

      {/* Channel Info */}
      <div className="channel-header">

        <img

          src={channelData?.channelBanner}

          alt={channelData?.channelName}

          style={{
            width: "100%",
            maxHeight: "220px",
            objectFit: "cover",
            borderRadius: "10px"
          }}

        />

        <h2>{channelData?.channelName}</h2>
        <p>{channelData?.description}</p>
        <p>
          Owner :
          {channelData?.owner?.username}
        </p>

        <p>
          Subscribers :
          {channelData?.subscribers || 0}
        </p>

        <p>
          Total Videos :
          {videos.length}
        </p>
        {isAuthenticated && (
          <button
            onClick={() => navigate("/add-video")}
          >
            Add Video
          </button>
        )}
      </div>

      {/* Video List */}
      <div className="video-grid">

        {videos.length === 0 ? (
          <h3>No videos uploaded.</h3>
        ) : (
          videos.map((video) => (
            <div key={video._id}>

              <VideoCard video={video} />

              {isAuthenticated && (
                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>

                  <button
                    onClick={() =>
                      navigate(`/edit-video/${video._id}`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(video._id)
                    }
                  >
                    Delete
                  </button>

                </div>
              )}

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Channel;