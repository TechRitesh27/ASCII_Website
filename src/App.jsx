import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TechnicalEvent from "./pages/TechnicalEvent";
import Sports from "./pages/Sports";
import FreshersAndFarewellParty from "./pages/FreshersAndFarewellParty";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/technical-event" element={<TechnicalEvent />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/freshers-farewell" element={<FreshersAndFarewellParty />} />
      </Routes>
      <Footer/>    
    </Router>

  );
};

export default App;