import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import FilterBar from '../../components/FilterBar/FilterBar'
import VideoGrid from '../../components/VideoGrid/VideoGrid'
import "./Home.css"

const Home = () => {

    const [searchText, setSearchText] = useState("");
    
  return (
    <>
    <Header
        searchText={searchText}
        setSearchText = {setSearchText}
    />
        <main className='home-container'>
    
            <Sidebar/>
            <section className='content'>
                <FilterBar/>
                <VideoGrid 
                    searchText={searchText}/>
            </section>
            
        </main>
  
    </>
  )
}

export default Home;