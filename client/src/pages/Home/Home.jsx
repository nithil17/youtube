import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import FilterBar from '../../components/FilterBar/FilterBar'
import VideoGrid from '../../components/VideoGrid/VideoGrid'

const Home = () => {
  return (
    <>
    <Header/>
    <Sidebar/>
    <FilterBar/>
    <VideoGrid/>
    </>
  )
}

export default Home;