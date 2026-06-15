import React, { useState } from 'react'
import "./Header.css"
import { FaBars } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'



const Header = ({
  searchText,

  setSearchText,

  isSidebarOpen,

  setIsSidebarOpen
}) => {

  const navigate = useNavigate();

  const { isAuthenticated, logout } = useContext(AuthContext);


  return (
    <header className='header'>

      <div className='header-left'>

        <FaBars
          className="menu-icon"
          onClick={() =>
            setIsSidebarOpen(!isSidebarOpen)
          }

        />
        <h2 className='logo'>
          YouTube
        </h2>
      </div>

      <div className='header-center'>
        <input
          value={searchText}
          onChange={(event) =>
            setSearchText(event.target.value)
          }
          placeholder='Search'
          type='text'
        />

        <button>

          <FaSearch />

        </button>
      </div>


      <div className="header-right">

        {

          isAuthenticated ? (

            <button
              className="signin-btn"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </button>
          ) : (

            <button
              className="signin-btn"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign In
            </button>
          )
        }

      </div>

    </header>

  )
}

export default Header;