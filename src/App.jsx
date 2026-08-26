import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="wrapper-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
