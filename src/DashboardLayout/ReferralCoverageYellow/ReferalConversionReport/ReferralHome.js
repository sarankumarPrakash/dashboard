import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Chart } from "react-google-charts";

const ReferralHome = () => {

  const data = [
    [
      "Element",
      "Overall Count",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["Converted to Surgery", 8.94, "#b87333", null],
    ["Selected for Surgery", 10.49, "silver", null],
    ["Visited to Camp", 19.3, "gold", null],
    ["Card Distributed", 21.45, "color: #e5e4e2", null],
  ];

  const options = {
    title: "Referral Conversion Progress (Overall)",
    width: 400,
    height: 300,
    // bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };

  return (
    <div>

      <div>
        <Chart
          chartType="BarChart"
          width="50%"
          height="300px"
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}

export default ReferralHome