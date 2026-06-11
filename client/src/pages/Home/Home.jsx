import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import FilterBar from '../../components/FilterBar/FilterBar'
import VideoGrid from '../../components/VideoGrid/VideoGrid'
import "./Home.css"
const Home = (
    {
        searchText,
        setSearchText,
        isSidebarOpen,
        setIsSidebarOpen,
        selectedCategory,
        setSelectedCategory
    }
) => {
    return (
                <section className='content'>
                    <FilterBar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    <VideoGrid
                        searchText={searchText}
                        selectedCategory={selectedCategory}
                    />
                </section>
    )
}
export default Home;