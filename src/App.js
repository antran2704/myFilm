import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Search from "./components/Pages/Search/Search";
function App() {
 
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/myFilm" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
