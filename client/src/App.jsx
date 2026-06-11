
import './App.css'
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';



function App() {

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  return (
    <BrowserRouter>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className='app-layout'>

        <Sidebar
          isSidebarOpen={isSidebarOpen}
        />


        <Routes>

          <Route
            path="/"
            element={<Home
              searchText={searchText}
              setSearchText={setSearchText}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />}
          />

          <Route
            path='/watch/:id'
            element={<VideoPlayer
              searchText={searchText}
              setSearchText={setSearchText}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />}
          />

        </Routes>

      </div>


    </BrowserRouter>
  )
}

export default App;
