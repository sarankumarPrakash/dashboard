import React from 'react'
import { Box, Paper } from '@mui/material';
import './Style.css'

import TopPerformerField from './TopPerformerFiled'
import Topunits from './PerformingUnits';
import PerformingUnits from './PerformingUnits';




const Home = () => {
  return (
    <div className='performingUnits'>
      <div>
        <div >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: "23%",
              height: "28vh",
            },
          }}
        >

          <Paper elevation={15} style={{backgroundColor:'burlywood'}} >
            <div className='performance-content'>
              <p>Household Survey done / day</p>
              <div className='performance-content-value' >
                <p>5892</p>
              </div>
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
                <div className='performance-content-value' >
                <p>5892</p>
              </div>
              </div>
            </div>


          </Paper>
          <Paper elevation={15} style={{backgroundColor:'cadetblue'}}  >
            <div className='performance-content'>
              <p>No. of Individuals  Screened / day</p>
              <div className='performance-content-value' >
                <p>65842</p>
                <div className='performance-content-value' >
                <p>5892</p>
              </div>
              </div>
            </div>


          </Paper>
      
            <div className='performance-content'>
              <PerformingUnits/>
            </div>
        </Box>
        </div>
      </div>
    </div>
  )
}

export default Home