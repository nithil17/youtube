import React, { useState } from 'react'
import "./Header.css"
import {FaBars} from "react-icons/fa"
import {FaSearch} from "react-icons/fa"

const Header = ({
  searchText,

    setSearchText,

    isSidebarOpen,

    setIsSidebarOpen
}  ) => {


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
          onChange={(event)=>
            setSearchText(event.target.value)
          }
          placeholder='Search' 
          type='text'
        />
        
                <button>

                    <FaSearch />

                </button>
       

      </div>
      <div className='header-right'>
        <button className='signin-btn'>
          Sign In
        </button>
      </div>
      
    </header>
   
  )
}

export default Header;