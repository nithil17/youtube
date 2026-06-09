import React from 'react'
import "./Sidebar.css"

export const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <div className='sidebar-item'>
            <span>
                🏠
            </span>
            <p>Home</p>

        </div>
        <div className='sidebar-item'>
            <span>
                🎬
            </span>
            <p>Subscription</p>

        </div>
        <div className='sidebar-item'>
            <span>
                🕒
            </span>
            <p>History</p>

        </div>
        <div className='sidebar-item'>
            <span>
                👍
            </span>
            <p>Liked Videos</p>

        </div>

    </aside>
  )
}

export default Sidebar;