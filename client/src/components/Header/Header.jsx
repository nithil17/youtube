import React, { useContext } from "react";
import "./Header.css";
import { FaBars, FaSearch } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";


const Header = ({
  searchText,
  setSearchText,
  isSidebarOpen,
  setIsSidebarOpen
}) => {

  const navigate = useNavigate();

  // Get logged-in user details
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  return (

    <header className="header">

      {/* Left Section */}

      <div className="header-left">

        <FaBars
          className="menu-icon"
          onClick={() =>
            setIsSidebarOpen(!isSidebarOpen)
          }
        />
        <Link to="/" className="logo-link">
                <img
          src="../../src/assets/logo.svg"
          alt="YouTube Clone"
          style={{
            height: "40px",
            cursor: "pointer"
          }}
        />
        </Link>


      </div>

      {/* Search Section */}

      <div className="header-center">

        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(event) =>
            setSearchText(event.target.value)
          }
        />

        <button>
          <FaSearch />
        </button>

      </div>

      {/* User Section */}

      <div className="header-right">

        {isAuthenticated ? (

          <>

            <span className="username">

              Hello, {user?.username || "User"}

            </span>

            <button
              className="signin-btn"
              onClick={() => {

                logout();

                navigate("/login");

              }}
            >

              Logout

            </button>

          </>

        ) : (

          <button
            className="signin-btn"
            onClick={() =>
              navigate("/login")
            }
          >

            Sign In

          </button>

        )}

      </div>

    </header>

  );

};

export default Header;