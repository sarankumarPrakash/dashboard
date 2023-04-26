import React from 'react'
import './Style.css'

/*----------------------------Mui COmponents ---------------------*/
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CoverageHome = () => {
  return (
    <div className='coverage-main'>
      <div className='coverage-table'>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer style={{ maxHeight: 312 }}>
        <Table stickyHeader aria-label="sticky table" >
        <TableHead sx={{backgroundColor:'violet'}} >
              <TableRow >
                <TableCell align="left" style={{backgroundColor:'violet',fontWeight:'bold'}}>Indicator</TableCell>
                <TableCell align="center" style={{backgroundColor:'violet',fontWeight:'bold'}}>Count</TableCell>

              </TableRow>
            </TableHead>
          <TableBody>
              <TableRow>
                <TableCell align="left">Total District Covered</TableCell>
                <TableCell align="center">5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Total Taluk Covered</TableCell>
                <TableCell align="center">8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Total Village Covered</TableCell>
                <TableCell align="center">10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Total HouseHold Surveyed</TableCell>
                <TableCell align="center">150</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Total Distance Covered</TableCell>
                <TableCell align="center">854217</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">No. of FieldWorker</TableCell>
                <TableCell align="center">12</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Total Camp Conducted</TableCell>
                <TableCell align="center">3</TableCell>
              </TableRow>

            </TableBody>
        </Table>
      </TableContainer>
      
    </Paper>

   
      </div>

    </div>
  )
}

export default CoverageHome