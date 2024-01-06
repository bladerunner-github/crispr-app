import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './newsletter.scss'
import Edition4 from '../assets/4th edition.jpg'
import Edition3 from '../assets/3rd edition.jpg'
import Edition2 from '../assets/2nd edition.jpg'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: 'center',
    width: '1em'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,

  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  imgUrl,
  bookUrl
) {
  return { imgUrl, bookUrl };
}

const rows = [
  createData(Edition4, "https://pubhtml5.com/qjgde/mtxa/"),
  createData(Edition3, "https://online.pubhtml5.com/qjgde/byun/"),
  createData(Edition2, "https://pubhtml5.com/qjgde/aons/"),
];

function largeTable() {
  return (
    <TableContainer component={Paper} className='large-table'>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Campus Pulse Edition</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <center>
                  <li class='book'>
                    <img src={row.imgUrl} />
                  </li>
                </center>
              </StyledTableCell>
              {/* <StyledTableCell align="right">{row.calories}</StyledTableCell>
            <StyledTableCell align="right">{row.fat}</StyledTableCell>
            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
              <StyledTableCell><a href={row.bookUrl}>Click To Read</a></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

}

const smallTable = () => {
  return (
    <TableContainer component={Paper} className='small-table'>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Campus Pulse Edition</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <center>
                  <li class='book'>
                    <img src={row.imgUrl} />
                  </li>
                </center>
              </StyledTableCell>
              {/* <StyledTableCell align="right">{row.calories}</StyledTableCell>
            <StyledTableCell align="right">{row.fat}</StyledTableCell>
            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
              <StyledTableCell><a href={row.bookUrl}>Click To Read</a></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default function CustomizedTables() {
  const isLargeScreen = window.innerWidth > 700;
  return (
    <div>
      {largeTable()}
      {smallTable()}
    </div>
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 700 }} aria-label="customized table">
    //     <TableHead>
    //       <TableRow>
    //         <StyledTableCell>Campus Pulse Edition</StyledTableCell>
    //         <StyledTableCell></StyledTableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <StyledTableRow key={row.name}>
    //           <StyledTableCell component="th" scope="row">
    //             <center>              
    //             <li class='book'>
    //               <img src={row.imgUrl} />
    //             </li>
    //             </center>
    //           </StyledTableCell>
    //           {/* <StyledTableCell align="right">{row.calories}</StyledTableCell>
    //           <StyledTableCell align="right">{row.fat}</StyledTableCell>
    //           <StyledTableCell align="right">{row.carbs}</StyledTableCell>
    //           <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
    //           <StyledTableCell><a href={row.bookUrl}>Click To Read</a></StyledTableCell>
    //         </StyledTableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}
