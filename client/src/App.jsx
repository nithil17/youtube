
import './App.css'
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import AddVideo from './pages/AddVideo/AddVideo';
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Login from "./pages/Login/Login";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';



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

        <main
          className='page-content'
        >

          <Routes>

            <Route
              path="/"
              element={<Home
                searchText={searchText}
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

            <Route

              path="/add-video"

              element={

                <ProtectedRoute>

                  <AddVideo />

                </ProtectedRoute>

              }

            />

            <Route

              path="/admin"

              element={<AdminDashboard />}

            />

            <Route

              path="/admin"

              element={<AdminDashboard />}


            />

            <Route

              path="/login"

              element={<Login />}

            />



          </Routes>

        </main>

      </div>


    </BrowserRouter>
  )
}

export default App;
