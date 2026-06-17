import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { addVideo } from "../../services/videoService";
import { getChannels } from "../../services/channelService";
import { categories } from "../../utils/categories";
import "./AddVideo.css";

function AddVideo() {

  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoUrl: "",
    thumbnail: "",
    channelId: "",
    views: "",
    category: ""
  });

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const loadChannels = async () => {
      try {
        const data = await getChannels();
        const ownChannels = data.filter((channel) => {
          const ownerId = channel.owner?._id || channel.owner;
          return ownerId === user?.id;
        });

        setChannels(ownChannels);
      } catch (error) {
        console.log(error);
      }
    };

    loadChannels();
  }, [user?.id]);

  // Update form values
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  // Submit video
  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!formData.title.trim()) {
      return alert("Title is required");
    }

    if (!formData.videoUrl.trim()) {
      return alert("Video URL is required");
    }

    if (!formData.thumbnail.trim()) {
      return alert("Thumbnail URL is required");
    }

    if (!formData.channelId) {
      return alert("Please select a channel");
    }

    if (!formData.category.trim()) {
      return alert("Category is required");
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
        category: ""
      });

    } catch (error) {

      alert(error.message || "Failed to add video");

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

          {channels.map(channel => (

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

          Add Video

        </button>

      </form>

    </div>

  );

}

export default AddVideo;
