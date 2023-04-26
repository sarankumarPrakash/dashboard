import React from 'react'

import { Box, Paper, Typography } from '@mui/material';

import CoverageHome from './CoverageIndicator/CoverageHome'
import ReferralHome from './ReferalConversionReport/ReferralHome'
import YellowCardHome from './YellowCard/YellowCardHome'

const Home = () => {
  return (
    <div>
      <div className=''>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: "31%",
              height: "51vh",
            },
          }}
        >
          
            <div>
              <ReferralHome />
            </div>
         
         
            <div>
              <CoverageHome />
            </div>
          
          
            <div>
              <YellowCardHome />
            </div>
        
        </Box>
      </div>
    </div>
  )
}

export default Home