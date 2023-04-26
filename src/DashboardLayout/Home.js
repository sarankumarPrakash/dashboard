import React, { useEffect, useState } from 'react'
import './Style.css'


/*---------------------- Mui Components --------------------------*/

import Button from '@mui/material/Button';



/*------------------------Mui Icons -----------------------------*/

import FilterListIcon from '@mui/icons-material/FilterList';




/*----------------------------External Components ----------------------*/
import PerformanceHome from './PerformanceIndicator/PerformanceHome'
import ReferralCoverageYellow from './ReferralCoverageYellow/Home';
import InduvidalVison from './InduvidualVision/Home'
import TopPerformer from './TopPerformer/Home'



const Home = () => {



    return (
        <div className='main-component'>

            <div className='filter'>
                <Button variant="contained" color='warning' endIcon={<FilterListIcon />}>filter</Button>
            </div>

            <div className='PeformanceIndicator'>
                <PerformanceHome />
            </div>

            <div className='yellow-coverage-referral'>
               
              <ReferralCoverageYellow/>
         
            </div>

            <div className='induvidualvision'>
            <InduvidalVison/>
            </div>
            <div className='induvidualvision'>
            <p className='text'>Top Performing Units</p>
            <TopPerformer/>
            </div>


        </div>
    )
}

export default Home