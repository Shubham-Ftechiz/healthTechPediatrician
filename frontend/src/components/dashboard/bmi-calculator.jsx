import React, { useState, useEffect } from "react";
import { DatePicker } from 'antd';

import HeightBMI from '../../images/heightBMI.png';
import WeightBMI from '../../images/weightBMI.png';

import { SliderPicker } from 'react-color';
import ManImg from "../../images/manDiagram.png";

import upArrow from "../../images/upArrow.svg";
import downArrow from "../../images/downArrow.svg";

import { useSelector, useDispatch } from "react-redux";
import { getBodyParts } from "../../actions/index";


const BMICalculator = () => {
    
    const bodyParts = 'https://shy-plum-dugong-tutu.cyclic.app/api/bodyparts';
    
    const bodyPartsDetails = useSelector((state) => state.changeBodyParts)
    const dispatch = useDispatch();
    
    const [colourChange, setColourChange] = useState({
        background: '#fff'
    });

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    const handleChangeComplete = (color) => {
        setColourChange({ background: color.hex });
    };
    
    const BmiIcon = [upArrow, downArrow, downArrow];

    useEffect(() => {
        // Body Parts
        fetch(bodyParts)
        .then(response => response.json())
        .then((json) => {
            dispatch(getBodyParts(json));
        })
        .catch(error => console.error(error));
    },[])
    
    return ( 
        <div className="bmicalculatorMain">
            <div className="topBmiIndex">
                <div className="mainHeading">
                    BMI Calculator
                </div>
                <div className="dataPickerWeek">
                    <DatePicker onChange={onChange} picker="week" placement={"topLeft"}/>
                </div>
            </div>

            <div className="heightWeightPicker">
                <div className="mainHeightWeight">
                    <div className="heightBMI">
                        <img src={HeightBMI} alt="image" height={"60"} width={"150"}/>
                    </div>
                    <div className="weightBMI">
                        <img src={WeightBMI} alt="image" height={"65"} width={"150"}/>
                    </div>
                </div>

                <div className="sidePickerMain">

                    <div className="sidePickerIcon">
                        <div className="sidePickerBmi">
                            Body Mass Index (BMI)
                        </div>

                        <div className="BMIHealth">
                            <div className="BMIValue">
                                24.9
                            </div>

                            <div className="healthyIcon">
                                You’re Healthy
                            </div>
                        </div>

                        <div className="sliderMain">
                            <SliderPicker
                            color={ colourChange }
                                    onChangeComplete={handleChangeComplete} />
                        </div>
                    </div>
                </div>
            </div>

            <hr style={{ border: "1px solid #4F4E4E", margin: "2rem 0" }} />

            <div className="bodyMeasurementMain">    
                <div className="bodyMeasurements">
                    <div className="subBodyMeasure">
                        <div id="bodyMeasurementHeading">
                            Body Measurements
                        </div>
                        <div id="checkStatus">
                            Last checked 2 Days Ago
                        </div>
                        <div id="bodyShape">
                            Inverted Triangle Body Shape
                        </div>
                    </div>

                {/* Cards of body parts */}

                <div className="cardsManage">
                    {bodyPartsDetails?.map((partsBody, index) =>
                        <div className="bodyParts">
                            <div className="subBodyPart">
                                {partsBody.parts}
                            </div>
                            <div className="partSizeIcon">
                                <div id="partValue">
                                    {partsBody.value}
                                </div>
                                <div id="partImg">
                                    <img src={BmiIcon[index]} alt="image"/>
                                </div>
                            </div>
                        </div>
                    )}
                </div> 
                </div>

                <div className="bodyMeasurementsImg">
                    <img src={ManImg} alt="image"/>
                </div>
            </div>
        </div>
    )
}

export default BMICalculator;