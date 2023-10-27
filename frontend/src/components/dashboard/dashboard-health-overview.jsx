import React from "react";
import "./dashboard.scss";

import LeftPanel from "./left-panel";
import HealthOverviewCards from "./health-overview-cards";

import BMICalculator from "./bmi-calculator";

const Dashboard = () => {
  return (
    <div className="mainDashboard">

   
        <LeftPanel />

        <HealthOverviewCards />
      
     
        <BMICalculator />
      
    </div>
  );
};

export default Dashboard;
