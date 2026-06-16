import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

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

import { AuthContext } from "../../context/AuthContext";

import "./Sidebar.css";

const Sidebar = ({ isSidebarOpen }) => {

    const navigate = useNavigate();

    const { isAuthenticated, logout } =
        useContext(AuthContext);

    if (!isSidebarOpen) {

        return null;

    }

    return (

        <aside className="sidebar">

            <Link
                to="/"
                className="sidebar-item"
            >
                <FaHome />
                <span>Home</span>
            </Link>

            {

                isAuthenticated ? (

                    <>

                        <Link
                            to="/add-video"
                            className="sidebar-item"
                        >
                            <FaPlusSquare />
                            <span>Add Video</span>
                        </Link>

                        <Link
                            to="/admin"
                            className="sidebar-item"
                        >
                            <FaChartBar />
                            <span>Admin Dashboard</span>
                        </Link>

                        <Link
                            to="/create-channel"
                            className="sidebar-item"
                        >
                            <FaPlusSquare />
                            <span>Create Channel</span>
                        </Link>

                        <Link
                            to="/"
                            className="sidebar-item"
                        >
                            <FaHistory />
                            <span>History</span>
                        </Link>

                        <Link
                            to="/"
                            className="sidebar-item"
                        >
                            <FaThumbsUp />
                            <span>Liked Videos</span>
                        </Link>



                        <div

                            className="sidebar-item"

                            onClick={() => {

                                logout();

                                navigate("/login");

                            }}

                        >

                            <FaSignOutAlt />

                            <span>Logout</span>

                        </div>

                    </>

                ) : (

                    <>

                        <Link
                            to="/login"
                            className="sidebar-item"
                        >
                            <FaSignInAlt />
                            <span>Login</span>
                        </Link>

                        <Link
                            to="/register"
                            className="sidebar-item"
                        >
                            <FaUserPlus />
                            <span>Register</span>
                        </Link>

                    </>

                )

            }

        </aside>

    );

};

export default Sidebar;