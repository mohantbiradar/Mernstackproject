// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reg from "./pages/Reg.js"; 
import Log from "./pages/Log.js"; 
import Navbar from "./components/Navbar.js";



function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Reg />} />
          <Route path="/login" element={<Log />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;