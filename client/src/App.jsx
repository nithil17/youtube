
import './App.css'
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path='/watch/:id'
          element={<VideoPlayer />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
