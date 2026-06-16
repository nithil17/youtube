// Navigation
import { Link,useNavigate } from "react-router-dom";

// React
import { useContext } from "react";

// Icons
import {
  FaHome,
  FaPlusSquare,
  FaChartBar,
  FaHistory,
  FaThumbsUp,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt
} from "react-icons/fa";

// Authentication Context
import { AuthContext } from "../../context/AuthContext";

// Styles
import "./Sidebar.css";

const Sidebar=({isSidebarOpen})=>{

  const navigate=useNavigate();

  const {isAuthenticated,logout}=useContext(AuthContext);

  return(

    // Add open/collapsed class based on sidebar state

    <aside
      className={`sidebar ${isSidebarOpen?"open":"collapsed"}`}
    >

      {/* Home */}

      <Link
        to="/"
        className="sidebar-item"
      >
        <FaHome/>
        <span>Home</span>
      </Link>

      {

        isAuthenticated?(

          <>

            {/* Add Video */}

            <Link
              to="/add-video"
              className="sidebar-item"
            >
              <FaPlusSquare/>
              <span>Add Video</span>
            </Link>

            {/* Admin Dashboard */}

            <Link
              to="/admin"
              className="sidebar-item"
            >
              <FaChartBar/>
              <span>Admin Dashboard</span>
            </Link>

            {/* Create Channel */}

            <Link
              to="/create-channel"
              className="sidebar-item"
            >
              <FaPlusSquare/>
              <span>Create Channel</span>
            </Link>

            {/* Placeholder pages */}

            <Link
              to="/"
              className="sidebar-item"
            >
              <FaHistory/>
              <span>History</span>
            </Link>

            <Link
              to="/"
              className="sidebar-item"
            >
              <FaThumbsUp/>
              <span>Liked Videos</span>
            </Link>

            {/* Logout */}

            <div
              className="sidebar-item"
              onClick={()=>{

                logout();

                navigate("/login");

              }}
            >

              <FaSignOutAlt/>

              <span>Logout</span>

            </div>

          </>

        ):(

          <>

            {/* Login */}

            <Link
              to="/login"
              className="sidebar-item"
            >
              <FaSignInAlt/>
              <span>Login</span>
            </Link>

            {/* Register */}

            <Link
              to="/register"
              className="sidebar-item"
            >
              <FaUserPlus/>
              <span>Register</span>
            </Link>

          </>

        )

      }

    </aside>

  );

};

export default Sidebar;