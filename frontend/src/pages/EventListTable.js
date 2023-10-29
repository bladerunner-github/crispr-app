import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect ,useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EditEventApproval } from '../components/EditEventApproval';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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

function createData(eventName, eventType, approvalStatus) 
{
  const uuid = uuidv4();
  return { uuid, eventName, eventType, approvalStatus };
}

const rows =             // to be extracted from DB
[
     createData("Summer Festival", "Festival", "Pending"),
     createData("Tech Conference", "Conference", "Pending"),
     createData("Art Exhibition", "Exhibition", "Pending"),
     createData("Food Fair", "Festival", "Pending"),
     createData("Product Launch", "Conference", "Pending")
];



export default function EventListTable() 
{
  const [data, setData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/demo', {
          method: 'GET',
        });
        const info = await response.json();
        console.log(info)
        setData(info)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  //data array would have the data imported from the database

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Event Name</StyledTableCell>
            <StyledTableCell align="center">Event Type</StyledTableCell>
            <StyledTableCell align="center">Approval Status</StyledTableCell>
            {/* <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Hui</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.uuid}>
              <StyledTableCell component="th" scope="row">
                {row.eventName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.eventType}</StyledTableCell>
              <StyledTableCell align="center">
                <EditEventApproval initialStatus={row.approvalStatus} data={data}/>
                </StyledTableCell>
              {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
