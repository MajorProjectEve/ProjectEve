import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import BreastCan from "./pages/breastcancer";
import CervicalCan from "./pages/cervialcancer";
import ProfileP from "./pages/profile";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/breastcancer" element={<BreastCan />} />
        <Route path="/cervicalcancer" element={<CervicalCan />} />
        <Route path="/profilepage" element={<ProfileP />} />
      </Routes>
    </Router>
  );
}

export default App;
