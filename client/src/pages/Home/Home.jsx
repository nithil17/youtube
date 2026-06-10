import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import FilterBar from '../../components/FilterBar/FilterBar'
import VideoGrid from '../../components/VideoGrid/VideoGrid'
import "./Home.css"

const Home = () => {

    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    
  return (
    <>
    <Header
        searchText={searchText}
        setSearchText = {setSearchText}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
    />
        <main className='home-container'>
    
            <Sidebar
                isSidebarOpen={isSidebarOpen}
            />
            <section className='content'>
                <FilterBar 
                    selectedCategory = {selectedCategory}
                    setSelectedCategory = { setSelectedCategory}
                />
                <VideoGrid 
                    searchText={searchText}
                    selectedCategory={selectedCategory}
                />
                    
            </section>
            
        </main>
  
    </>
  )
}

export default Home;