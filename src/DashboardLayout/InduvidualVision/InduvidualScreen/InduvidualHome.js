import React from 'react'
import { Chart } from "react-google-charts";

const InduvidualHome = () => {

    const data = [
        ["Vision Center", "Count", { role: "style" }],
        ["To Vision Center", 8, "#b87333"], // RGB value
        ["To Vision Camp", 10, "silver"], // English color name
        ["To Vision Base Hospital", 25, "gold"],
        ["Recived Glass", 35, "color: #e5e4e2"], // CSS-style declaration
      ];
  return (
    <div>
        <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
    </div>
  )
}

export default InduvidualHome