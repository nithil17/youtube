import React from 'react'
import "./Sidebar.css"
import {
    FaHome,
    FaHistory,
    FaThumbsUp,
    FaSubscript
} from "react-icons/fa";

import { MdSubscriptions } from "react-icons/md";

export const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <div className='sidebar-item'>
            <FaHome/>
            <span>
                Home
            </span>
            

        </div>
        <div className='sidebar-item'>
            <MdSubscriptions/>
            <span>
                Subscription
            </span>
            

        </div>
        <div className='sidebar-item'>
            <FaHistory/>
            <span>
                History
            </span>
           

        </div>
        <div className='sidebar-item'>
            <FaThumbsUp/>
            <span>
                Liked Videos
            </span>
           

        </div>

    </aside>
  )
}

export default Sidebar;