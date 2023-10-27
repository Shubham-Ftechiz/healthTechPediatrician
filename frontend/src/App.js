import React from "react";
import Dashboard from "./components/dashboard/dashboard-health-overview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <Routes>
    <Route>
      <Route path="/" element={<Dashboard />} />
    </Route>
  </Routes>
);

export default App;
