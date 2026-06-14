import { Link } from "react-router-dom";
import "./AdminTable.css";

const AdminTable = ({ videos, onDelete }) => {
  if (!videos.length) {
    return (
      <div className="empty-table">
        <h3>No videos found</h3>
      </div>
    );
  }

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this video?"
    );

    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>Channel</th>
          <th>Category</th>
          <th>Views</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {videos.map((video) => (
          <tr key={video._id}>
            <td>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="table-thumbnail"
              />
            </td>

            <td>{video.title}</td>

            <td>{video.channel}</td>

            <td>{video.category}</td>

            <td>{video.views}</td>

            <td className="action-buttons">
              <Link to={`/edit-video/${video._id}`}>
                <button className="edit-btn">
                  Edit
                </button>
              </Link>

              <button
                className="delete-btn"
                onClick={() => handleDelete(video._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminTable;