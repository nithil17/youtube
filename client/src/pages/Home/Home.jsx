import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import FilterBar from '../../components/FilterBar/FilterBar'
import VideoGrid from '../../components/VideoGrid/VideoGrid'

const Home = () => {

    const [searchText, setSearchText] = useState("");

  return (
    <>
    <Header
        searchText={searchText}
        setSearchText = {setSearchText}
    />
    <p>Current Search: {searchText}</p>
    <Sidebar/>
    <FilterBar/>
    <VideoGrid/>
    </>
  )
}

export default Home;