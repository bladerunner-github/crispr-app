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

function createData(eventTitle, name, location, date, email, phone, imgURL, approvalStatus) // title, name, location, time, email, phone, cover 
{
  const uuid = uuidv4();
  const img = (<img src={imgURL} width={100} height={60} alt={eventTitle}/>)
  return { uuid, eventTitle ,name, location, date, email, phone, img, approvalStatus };
}

const rows =             // to be extracted from DB
[
    createData("Tech Conference", "John Doe", "123 Main St", 
      "2023-11-15 10:00 AM", "john@example.com", "555-555-5555", 
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "pending"),
    createData("Art Exhibition", "Jane Smith", "456 Art Avenue", 
      "2023-12-05 3:00 PM", "jane@example.com", "123-456-7890", 
      "art.jpg", "pending"),
    createData("Music Festival", "Bob Johnson", "789 Park Rd", 
      "2023-10-20 5:30 PM", "bob@example.com", "999-999-9999", 
      "music.jpg", "pending"),
];



export default function EventListTable() 
{
  const [data, setData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/demo', 
        {
          method: 'GET',
        });
        const info = await response.json();
        setData(info)
        console.log(info)
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
            <StyledTableCell align='center'>Event Title</StyledTableCell>
            <StyledTableCell align="center">Cover Image</StyledTableCell>
            <StyledTableCell align="center">Organiser Name</StyledTableCell>
            <StyledTableCell align="center">Date & Time</StyledTableCell>
            <StyledTableCell align="center">Venue</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
            <StyledTableCell align="center">Approval Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.uuid}>
              <StyledTableCell component="th" scope="row" align='center'>
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="center">{row.img}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.location}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.phone}</StyledTableCell>
              <StyledTableCell align="center">
                <EditEventApproval initialStatus={row.approved} data={row} id={row._id}/>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
