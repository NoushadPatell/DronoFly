import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { Home } from './Components/Home/Home'
import "./App.css";
import Cam from './Components/Features/Camera/Cam';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/camera" element={<Cam />} />
    </Routes>
  </Router>
  )
}

export default App