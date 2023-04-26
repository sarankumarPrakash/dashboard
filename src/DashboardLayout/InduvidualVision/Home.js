import React from 'react'
import { Box, Paper } from '@mui/material';

import VisionHome from './VisionCenter/VisionHome'
import InduvidualHome from './InduvidualScreen/InduvidualHome'
import GsiHome from './Gsi/GsiHome'




const Home = () => {
  return (
    <div>
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
              <VisionHome />
            </div>


            <div>
              <InduvidualHome />
            </div>


            <div>
              <GsiHome />
            </div>

          </Box>
        </div>
      </div>
    </div>
  )
}

export default Home