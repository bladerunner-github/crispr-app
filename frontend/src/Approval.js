import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';

function Approval() {
  const [approved, setApproved] = useState(false);
  const [data, setData] = useState([]); // Initialize data as an empty array

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/demo', {
          method: 'GET',
        });
        const info = await response.json();
        setData(info); // Set the data state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this runs once on component mount

  const yesClicked = async (i) => {
    let id = data[i]._id;
    let approvedStatus = true;
    let dataUpdate = {id,approvedStatus};
    console.log(dataUpdate)
    const response = await fetch('http://localhost:8080/demo' , {
        method:'PUT',
        headers:{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(dataUpdate)
    })
    
  };

  const noClicked = async (i) => {
    let id = data[i]._id;
    let approvedStatus = false;
    let dataUpdate = {id,approvedStatus};
    console.log(dataUpdate)
    const response = await fetch('http://localhost:8080/demo' , {
        method:'PUT',
        headers:{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(dataUpdate)
    })
  };

  const ApprovalList = data.map((d, i) => (
    <div key={i}>
      <EventCard data={d} key={d._id}/>
      <button onClick={() => yesClicked(i)}>yes</button>
      <button onClick={() => noClicked(i)}>no</button>
    </div>
  ));

  return <div>{ApprovalList}</div>;
}

export default Approval;
