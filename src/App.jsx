import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="wrapper-container">
      <Routes>
        <Route path="/Shop-test/" element={<Home />} />
        <Route path="/Shop-test/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
