import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PerformingUnits = () => {
  return (
    <div>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer style={{ maxHeight: 460 }}>
        <Table stickyHeader aria-label="sticky table" >
        <TableHead sx={{backgroundColor:'violet'}} >
              <TableRow >
                <TableCell align="left" style={{backgroundColor:'violet',fontWeight:'bold'}}>Indicator</TableCell>
                <TableCell align="center" style={{backgroundColor:'violet',fontWeight:'bold'}}>Count</TableCell>
                <TableCell align="center" style={{backgroundColor:'violet',fontWeight:'bold'}}>Count</TableCell>

              </TableRow>
            </TableHead>
          <TableBody>
              <TableRow>
                <TableCell align="left">Total District Covered</TableCell>
                <TableCell align="center">5</TableCell>
                <TableCell align="center">5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Total Taluk Covered</TableCell>
                <TableCell align="center">8</TableCell>
                <TableCell align="center">5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Total Village Covered</TableCell>
                <TableCell align="center">10</TableCell>
                <TableCell align="center">5</TableCell>
              </TableRow>
             

            </TableBody>
        </Table>
      </TableContainer>
      
    </Paper>
    </div>
  )
}

export default PerformingUnits