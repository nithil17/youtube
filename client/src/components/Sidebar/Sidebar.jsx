import React from 'react'
import "./Sidebar.css"
import {
    FaHome,
    FaHistory,
    FaThumbsUp,
    FaSubscript
} from "react-icons/fa";

import { MdSubscriptions } from "react-icons/md";

export const Sidebar = ({
    isSidebarOpen, 
    
}) => {

const menuItems = [

    {
        id:1,
        label:"Home",
        icon:FaHome
    },

    {
        id:2,
        label:"Subscription",
        icon:MdSubscriptions
    },

    {
        id:3,
        label:"History",
        icon:FaHistory
    },

    {
        id:4,
        label:"Liked Videos",
        icon:FaThumbsUp
    }

];

  return (
    <aside 
        
        className={
            isSidebarOpen
            ?
            "sidebar"
            : "sidebar collapsed"
        }
        
    >

       {
        menuItems.map((item)=>{
            const Icon = item.icon;

            return(
                <div
                    className="sidebar-item"
                    key={item.id}
                >
                    <Icon/>
                    {
                        isSidebarOpen &&
                         <span>

                            {item.label}

                        </span>

                    }

                </div>
            )
        })
       }

    

    </aside>
  )
}

export default Sidebar;