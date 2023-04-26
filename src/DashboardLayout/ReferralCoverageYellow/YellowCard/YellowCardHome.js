import React from 'react'
import { Chart } from "react-google-charts";

const YellowCardHome = () => {

  const data = [
    ["Hospital", "Percentage"],
    ["SEH - Anand", 11],
    ["SEH - bangalore", 2],
    ["SEH - Coimbatore", 2],
    ["SEH - Guntur", 2],
    ["SEH - Hydrabed", 7], 
    ["SEH - Indore", 11],
    ["SEH - Jaipur", 2],
    ["SEH - Kanpur", 2],
    ["SEH - Krishnakovil", 2],
    ["SEH - Ludhiana", 7], 
    ["SEH - Panvel", 2],
    ["SEH - Shimoga", 2]
  ];

  const options = {
    title: "Yellow Cards converted to GOV Surgery",
    pieHole: 0.1,
    is3D: false,
  };

  return (

    <div>
      {/* <div>YellowCardHome</div> */}
      <div>
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}

export default YellowCardHome