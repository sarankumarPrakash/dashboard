import React from 'react'
import './Style.css'

/*---------------------- Mui Components --------------------------*/

import { Box, Paper, Typography } from '@mui/material';



const PerformanceHome = () => {
  return (
    <div>
      <div className=''>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: "23%",
              height: "18vh",
            },
          }}
        >

          <Paper elevation={15} style={{backgroundColor:'burlywood'}} >
            <div className='performance-content'>
              <p>Household Survey done / day</p>
              <div className='performance-content-value' >
                <p>5892</p>
              </div>
            </div>

          </Paper>
          <Paper elevation={15} style={{backgroundColor:'cornflowerblue'}}  >
            <div className='performance-content'>
              <p>Distance Travelled / day</p>
              <div className='performance-content-value' >
                <p>389467</p>
              </div>
            </div>


          </Paper>
          <Paper elevation={15} style={{backgroundColor:'cadetblue'}}  >
            <div className='performance-content'>
              <p>No. of Individuals  Screened / day</p>
              <div className='performance-content-value' >
                <p>65842</p>
              </div>
            </div>


          </Paper>
          <Paper elevation={15}   style={{backgroundColor:'chocolate'}}>
            <div className='performance-content'>
              <p>Yellow Card Issued  / day</p>
              <div className='performance-content-value' >
                <p>895</p>
              </div>
            </div>


          </Paper>
        </Box>
      </div>
    </div>
  )
}

export default PerformanceHome