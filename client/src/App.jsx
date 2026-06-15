import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home/Home";
import VideoPlayer from "./pages/VideoPlayer/VideoPlayer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import AddVideo from "./pages/AddVideo/AddVideo";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Channel from "./pages/Channel/Channel";
import EditVideo from "./pages/EditVideo/EditVideo";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Register from "./pages/Register/Register";

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="app-layout">
        <Sidebar isSidebarOpen={isSidebarOpen} />

        <main className="page-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchText={searchText}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />

            <Route
              path="/watch/:id"
              element={<VideoPlayer />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="/reset-password"
              element={<ResetPassword />}
            />

            <Route
              path="/channel/:channel"
              element={<Channel />}
            />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
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
              path="/edit-video/:id"
              element={
                <ProtectedRoute>
                  <EditVideo />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;