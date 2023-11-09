import React, { useEffect,useState } from "react";
import Dashboard from "./components/dashboard/dashboard-health-overview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import PrivateRoutes from "./components/common/utils/privateRoutes";
import { useNavigate } from "react-router-dom";
import Registeration from "./components/register";
import PageNotFound from "./view/pageNotFound";


const App = () => {
  const [baseRoutes, setBaseRoutes] = useState(false);

  const navigate = useNavigate()

  console.log("CheckTest:", window.location.pathname);

  useEffect(() => {
    if (localStorage.getItem("token") && window.location.pathname == "/") {
      navigate("/dashboard");
    }
    else {
      setBaseRoutes(true);
    }
  },[])
  return (
    <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      {baseRoutes === true && (
        <Route>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Registeration />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
      )}
      
    </Routes>
  );
}

export default App;
