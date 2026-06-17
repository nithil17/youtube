import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getVideoById, updateVideo } from "../../services/videoService";
import { categories } from "../../utils/categories";
import "../AddVideo/AddVideo.css";

function EditVideo() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoUrl: "",
    thumbnail: "",
    channel: "",
    views: "",
    category: ""
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load existing video details

  useEffect(() => {

    const loadVideo = async () => {

      try {

        const video = await getVideoById(id);

        setFormData({
          title: video.title || "",
          description: video.description || "",
          videoUrl: video.videoUrl || "",
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

  // Update form values

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  };

  // Submit updated video

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!formData.title.trim()) {
      return alert("Title is required");
    }

    if (!formData.videoUrl.trim()) {
      return alert("Video URL is required");
    }

    try {

      await updateVideo(id, formData);

      alert("Video Updated Successfully");

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

      <form
        className="add-video-form"
        onSubmit={handleSubmit}
      >

        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          name="videoUrl"
          placeholder="Video URL"
          value={formData.videoUrl}
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

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          {categories
            .filter((category) => category !== "All")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>

        <button type="submit">
          Update Video
        </button>

      </form>

    </div>

  );

}

export default EditVideo;
