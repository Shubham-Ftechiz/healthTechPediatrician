import React from "react";
import Dashboard from "./components/dashboard/dashboard-health-overview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Registeration from "./components/register";

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/register" element={<Registeration />} />
  </Routes>
);

export default App;
