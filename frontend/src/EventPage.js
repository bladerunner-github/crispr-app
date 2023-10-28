import React, { useEffect, useState } from 'react';
import { getGlobalData } from './globalState';
import EventCard from './EventCard';
import Eventpage from './components/Eventpage';
import { events } from './components/index1';

// function EventPage() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('http://localhost:8080/demo', {
//           method: 'GET',
//         });
//         const info = await response.json();
//         setData(info); // Set the data state with fetched data
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);
//   // Empty dependency array ensures this runs once on component mount

//   const EventList = data.map((d) => {
//     return d.approved ? <EventCard data={d} key={d._id} /> : null;
//   });
//   return (
//     <div>

//       {EventList}
//     </div>
//   );
// }
function EventPage() {
  return (
    <div>
      {

        events.map((e) => (
          <Eventpage

            hostname={e.hostname}
            imgURL={e.imgURL}
            about={e.about}
            title={e.Title}
            date={e.date}
            time={e.time}
            location={e.location}


          // key={review.customerName}
          // imgURL={review.imgURL}
          // customerName={review.customerName}
          // rating={review.rating}
          // feedback={review.feedback}
          />
        ))
      }
    </div>
  );


}

export default EventPage;
