
import './App.css'
import Home from './pages/Home/Home';
import { BrowserRouter, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route
      path = "/"
      element = {Home}
    />

    <Route
      path='/watch/:id'
      element={<VideoPlayer />}
    />
    
  </Routes>
</BrowserRouter>

function App() {


  return (
    <Home/>
  )
}

export default App;
