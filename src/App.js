import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/navbar";
import Home from "./pages/Home";
import Configuration from "./pages/Configuration";
import Vendor from "./pages/Vendor";
import Customer from "./pages/Customer";
import Footer from "./layout/Footer";
import TicketStatus from "./pages/TicketStatus";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/ticketStatus" element={<TicketStatus/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;


