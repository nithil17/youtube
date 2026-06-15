import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getVideos, deleteVideo } from "../../services/videoService";
import AdminTable from "../../components/AdminTable/AdminTable";

const AdminDashboard = () => {
  // Stores all videos
  const [videos, setVideos] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  // Load videos when page opens
  useEffect(() => {
    loadVideos();
  }, []);

  // Fetch videos from backend
  const loadVideos = async () => {
    try {
      setLoading(true);

      const data = await getVideos();

      setVideos(data);
      setError("");
    } catch (error) {
      setError(error.message || "Failed to load videos");
    } finally {
      setLoading(false);
    }
  };

  // Delete a video
  const handleDelete = async (id) => {
    try {
      await deleteVideo(id);

      // Update UI without refreshing
      setVideos((prevVideos) =>
        prevVideos.filter((video) => video._id !== id)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  // Loading UI
  if (loading) {
    return <h2>Loading Videos...</h2>;
  }

  // Error UI
  if (error) {
    return (
      <div>
        <h2>{error}</h2>

        <button onClick={loadVideos}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <AdminTable
        videos={videos}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AdminDashboard;