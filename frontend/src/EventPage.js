import React, { useEffect, useState } from 'react';
import { getGlobalData } from './globalState';
import EventCard from './EventCard';

function EventPage() {
  const [data, setData] = useState([]);

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

  const EventList = data.map((d) => {
    return d.approved ? <EventCard data={d} key={d._id}/> : null;
  });

  return (
    <div>
      {EventList}
    </div>
  );
}

export default EventPage;
