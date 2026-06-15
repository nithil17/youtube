import { Link } from "react-router-dom";
import {
  FaHome,
  FaPlusSquare,
  FaChartBar,
  FaHistory,
  FaThumbsUp
} from "react-icons/fa";

const Sidebar = ({ isSidebarOpen }) => {

  if (!isSidebarOpen) {
    return null;
  }

  return (

    <aside className="sidebar">

      <Link to="/" className="sidebar-item">
        <FaHome />
        <span>Home</span>
      </Link>

      <Link to="/add-video" className="sidebar-item">
        <FaPlusSquare />
        <span>Add Video</span>
      </Link>

      <Link to="/admin" className="sidebar-item">
        <FaChartBar />
        <span>Admin Dashboard</span>
      </Link>

      <Link to="/" className="sidebar-item">
        <FaHistory />
        <span>History</span>
      </Link>

      <Link to="/" className="sidebar-item">
        <FaThumbsUp />
        <span>Liked Videos</span>
      </Link>

    </aside>

  );

};

export default Sidebar;