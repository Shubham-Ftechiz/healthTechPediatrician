import React, {useState, useEffect} from "react";
import { SearchOutlined,BellOutlined } from '@ant-design/icons';
import BloodSugarDiagram from "../../images/bloodSugarDiagram.svg";
import HeartRateDiagram from "../../images/heartRateDiagram.svg";
import BloodPresureDiagram from "../../images/bloodPressureDiagram.svg";

import BloodSugareIcon from "../../images/bloodSugar.svg";
import HeartRateIcon from "../../images/heartRate.svg";
import BloodPresureIcon from "../../images/bloodPressure.svg";
import { DatePicker, Space } from 'antd';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid ,
Legend} from "recharts";
import { useSelector, useDispatch } from "react-redux";
import { getHealthMetrics, getBarData } from "../../actions/index";
import { HEALTHMETRICS, ACTIVITYGROWTH } from "../../contants/index";
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

const HealthOverviewCards = () => {
  
   /* const healthmetricsAPI = 'https://shy-plum-dugong-tutu.cyclic.app/api/healthmetrics';
   const activitygrowthAPI = 'https://shy-plum-dugong-tutu.cyclic.app/api/activitygrowth'; */
  
  const dispatch = useDispatch();
  const jwtToken = localStorage.getItem("token");

  const imgArr = [BloodSugarDiagram, HeartRateDiagram, BloodPresureDiagram]
  const iconArr = [BloodSugareIcon, HeartRateIcon, BloodPresureIcon]
  
  const healthMetricsState = useSelector((state) => state.changeHealthMetrics);
  const barGraphData = useSelector((state) => state.changeBarData);

  const navigate = useNavigate();

  useEffect(() => {
    // CHECKING IF USER IS ALREADY LOGGED IN, THEN DON'T GO BACK
    if (jwtToken !== 'null') {
      window.history.pushState(null, null, window.location.href);
      window.onpopstate = function (event) {
        window.history.go(1);
      };
    }

    // Health Cards
    fetch(HEALTHMETRICS, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + jwtToken
      },
        })
      .then(response => response.json())
      .then((json) => {
        dispatch(getHealthMetrics(json));
      })
      .catch(error => console.error(error));

      // Graph
    fetch(ACTIVITYGROWTH, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + jwtToken
      }
      })
      .then(response => response.json())
      .then((json) => {
        dispatch(getBarData(json));
      })
      .catch(error => console.error(error));
  }, []);

  const onChangeDate = (value, dateString) => {
    console.log('Selected Time: ', value);
  };

  const onOk = (value) => {
    console.log('onOk: ', value);
  };

  const logoutFunc = () => {
    // localStorage.clear();
    localStorage.setItem("token", null);
    navigate('/login');
  }

return(
    <div className="healthOverviewMain">
        <div className="subhealthOverview">
            <div className="healthOverviewtop">
                <div className="healthHeading">Health Overview</div> 
        <div className="serachbellIcon">
          <Button type="primary" size={1} style={{ float: "right",marginLeft:"15px" }} danger onClick={logoutFunc}>
            Logout
          </Button>
                <BellOutlined style={{ backgroundColor: "white", color: "black",padding:"5px",border:"1px solid white"
                    ,borderRadius:"5px",marginLeft:"20px",float:"right"}}/>
                    <SearchOutlined style={{ backgroundColor: "white", color: "black",padding:"5px",border:"1px solid white"
            , borderRadius: "5px", float: "right"
          }} />
                </div>
            </div>
            <div className="dateCards">
                August 12, 2021
            </div>
         <div className="mainCards">
        {healthMetricsState?.map((data, index) => {
          return(
            <div key={index} className="cards">
              <div className="topIcon">
                <div className="iconBackground" style={{ backgroundColor: data.colour }}>
                      <img src={iconArr[index]} alt="image" />
                </div>
                <div className="testName"> {data.name}</div>
              </div>

              <div className="unitMain">
                <span className="measureName">{data.measure} </span>
                <span className="measureUnit">{data.measureUnit}</span>
              </div>
              <div className="testResult" style={{ backgroundColor: data.colour }}>{data.result} </div>
              <img src={imgArr[index]} alt="image" />
            </div>
          )
          
        })}
          </div>
            
        </div>
        <div className="activityGrowth">
            <div className="subActivityGrowth">
                <span className="activityGrowthTxt"> Activity Growth </span> 
                <span className="datePicker">
                    <DatePicker showTime onChange={onChangeDate} onOk={onOk} placement={"topLeft"}/>
                </span>
            </div>
            <div className="graph-chart">
                      <BarChart
                        width={683}
                        height={270}
                        data={barGraphData ?? barGraphData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        {/* <Tooltip /> */}
                        <Legend />
                        <Bar dataKey="Aerobics" fill="#CA6B6E" />
                        <Bar dataKey="Yoga" fill="#478F96" />
                        <Bar dataKey="Meditation" fill="#D08726" />
                        
                      </BarChart>
            </div>
        </div>
        <div className="appointments">
            <div className="upcomingAppointment">Upcoming Appointments</div>

            <div className="appointmentDate">August 14, 2021</div>

            <div className="appointmentName">Consultation with Dr. James</div>

        </div>
    </div>
)
}

export default HealthOverviewCards;