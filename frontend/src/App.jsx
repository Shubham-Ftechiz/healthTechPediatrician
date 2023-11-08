import React from "react";
import Dashboard from "./components/dashboard/dashboard-health-overview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

const App = () => (
  <Routes>
    <Route>
      <Route path="/" element={<Login />} />
    </Route>
    <Route>
      <Route path="/dashboard" element={<Dashboard/>} />
    </Route>
  </Routes>
);

export default App;
