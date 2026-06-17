import { useState, useEffect, useContext, useCallback } from "react";

import { getVideos, deleteVideo } from "../../services/videoService";
import AdminTable from "../../components/AdminTable/AdminTable";
import { AuthContext } from "../../context/authContext";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);

  // Stores all videos
  const [videos, setVideos] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  const getOwnVideos = useCallback((allVideos) =>
    allVideos.filter((video) => {
      const ownerId = video.owner?._id || video.owner;
      return ownerId === user?.id;
    }), [user?.id]);

  // Fetch videos from backend
  const loadVideos = async () => {
    try {
      setLoading(true);

      const data = await getVideos();

      setVideos(getOwnVideos(data));
      setError("");
    } catch (error) {
      setError(error.message || "Failed to load videos");
    } finally {
      setLoading(false);
    }
  };

  // Load videos when page opens
  useEffect(() => {
    getVideos()
      .then((data) => {
        setVideos(getOwnVideos(data));
        setError("");
      })
      .catch((error) => {
        setError(error.message || "Failed to load videos");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [getOwnVideos]);

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
