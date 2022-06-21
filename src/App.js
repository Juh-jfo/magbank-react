import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal.js";
import "./App.scss";

import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar handleCreateAcc={() => setShowModal(true)} />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
      <Footer />
    </>
  );
};
export default App;
