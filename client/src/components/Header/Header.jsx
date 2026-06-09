import React, { useState } from 'react'

const Header = ({searchText , setSearchText}  ) => {


  return (
    <header className='header'>

      <div className='header-left'>
         ☰
         <h2>YouTube</h2>

      </div>
      <div className='header-center'>
        <input 
          value={searchText}
          onChange={(event)=>
            setSearchText(event.target.value)
          }
          placeholder='Search' 
        />
        <button>Search</button>
       

      </div>
      <div className='header-right'>
        <button>
          Sign In
        </button>
      </div>
      
    </header>
   
  )
}

export default Header;