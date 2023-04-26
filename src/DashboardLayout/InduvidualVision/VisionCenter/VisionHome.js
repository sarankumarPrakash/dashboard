import React from 'react'
import { Chart } from "react-google-charts";
import './Style.css'


const VisionHome = () => {

    /*---------------- induvisal screen data ------------*/
    const data = [
        ["gender", "data"],
        ["Male", 33],
        ["Female", 26],
        ["others", 22],
    ];

    const options = {
        title: "Total no. of Induvidual Screen",
        sliceVisibilityThreshold: 0.2, // 20%
    };


    /*---------------- cataract data Man -------------------*/
    const cataractManData = [
        ["Pac Man", "Percentage"],
        ["", 360],
        ["", 100],
    ];

    const cataractManOption = {
        legend: "none",
        pieSliceText: "none",
        pieStartAngle: 135,
        tooltip: { trigger: "none" },
        slices: {
            0: { color: "rgb(51, 102, 204)" },
            1: { color: "transparent" },
        },
    };

/*---------------- cataract data  Female-------------------*/
    const cataractFemaleData = [
        ["Pac Man", "Percentage"],
        ["", 57],
        ["", 100],
    ];

    const cataractFemaleOption = {
        legend: "none",
        pieSliceText: "none",
        pieStartAngle: 135,
        tooltip: { trigger: "dfh" },
        slices: {
            0: { color: "rgb(220, 57, 18)" },
            1: { color: "transparent" },
        },
    };

/*---------------- cataract data  Otheres-------------------*/
    const cataractOtheresData = [
        ["Pac Man", "Percentage"],
        ["", 60],
        ["", 100],
    ];

    const cataractOtheresOption = {
        legend: "none",
        pieSliceText: "none",
        pieStartAngle: 135,
        tooltip: { trigger: "none" },
        slices: {
            0: { color: "rgb(255, 153, 0)" },
            1: { color: "transparent" },
        },
    };


    // rgb(220, 57, 18)
    // rgb(255, 153, 0)
    return (
        <div>
            <div>
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />
            </div>
            <div className='cotaract'>
               


            </div>

        </div>


    )
}

export default VisionHome