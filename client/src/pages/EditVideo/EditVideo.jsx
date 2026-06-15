import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getVideoById, updateVideo } from "../../services/videoService";
import "../AddVideo/AddVideo.css";

function EditVideo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    channel: "",
    views: "",
    category: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadVideo = async () => {
      try {
        const video = await getVideoById(id);

        setFormData({
          title: video.title || "",
          thumbnail: video.thumbnail || "",
          channel: video.channel || "",
          views: video.views || "",
          category: video.category || ""
        });
        setError("");
      } catch (error) {
        setError(error.message || "Failed to load video");
      } finally {
        setLoading(false);
      }
    };

    loadVideo();
  }, [id]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateVideo(id, formData);
      navigate("/admin");
    } catch (error) {
      alert(error.message || "Failed to update video");
    }
  };

  if (loading) {
    return <h2>Loading Video...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="add-video-container">
      <h2>Edit Video</h2>

      <form className="add-video-form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          name="thumbnail"
          placeholder="Thumbnail URL"
          value={formData.thumbnail}
          onChange={handleChange}
        />

        <input
          name="channel"
          placeholder="Channel"
          value={formData.channel}
          onChange={handleChange}
        />

        <input
          name="views"
          placeholder="Views"
          value={formData.views}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />

        <button type="submit">
          Update Video
        </button>
      </form>
    </div>
  );
}

export default EditVideo;
