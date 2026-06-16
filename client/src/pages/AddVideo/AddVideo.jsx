import { useEffect, useState } from "react";
import { addVideo } from "../../services/videoService";
import { getChannels } from "../../services/channelService";
import "./AddVideo.css";

function AddVideo() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoUrl: "",
    thumbnail: "",
    channelId: "",
    views: "",
    category: "",
  });

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    loadChannels();
  }, []);

  const loadChannels = async () => {
    try {
      const data = await getChannels();
      setChannels(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!formData.title.trim()) {
      return alert("Title is required");
    }

    if (!formData.videoUrl.trim()) {
      return alert("Video URL is required");
    }

    if (!formData.thumbnail.trim()) {
      return alert("Thumbnail URL is required");
    }

    try {

      await addVideo(formData);

      alert("Video Added Successfully");

      setFormData({
        title: "",
        description: "",
        videoUrl: "",
        thumbnail: "",
        channelId: "",
        views: "",
        category: "",
      });

    } catch (error) {

      alert(error.message);

    }
  };

  return (

    <div className="add-video-container">

      <h2>Add New Video</h2>

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

        <select
          name="channelId"
          value={formData.channelId}
          onChange={handleChange}
        >

          <option value="">
            Select Channel
          </option>

          {channels.map((channel) => (

            <option
              key={channel._id}
              value={channel._id}
            >
              {channel.channelName}
            </option>

          ))}

        </select>
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
          Add Video
        </button>

      </form>

    </div>

  );

}

export default AddVideo;