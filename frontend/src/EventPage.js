import React, { useEffect, useState } from "react";
import { getGlobalData } from "./globalState";
import EventCard from "./EventCard";
import Eventpage from "./components/Eventpage";
import { events } from "./components/index1";
import "./styles/eventspagecss.css";
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
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/demo", {
          method: "GET",
        });
        const info = await response.json();
        setData(info);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const Events = data.map((d) => {
    let hostname = `${d.fName} ${d.lName}`;
    let imgURL =
      "https://e1.pxfuel.com/desktop-wallpaper/754/836/desktop-wallpaper-study-group-study.jpg";
    return { ...d, hostname, imgURL };
  });
  console.log(Events);
  return (
    <div className=" flex flex-row flex-wrap eventscardcss">
      {Events.map((e) =>
        e.approved ? (
          <Eventpage
            hostname={e.hostname}
            imgURL={e.imgURL}
            about={e.description}
            title={e.title}
            date={e.date}
            time={e.time}
            location={e.location}
          />
        ) : null
      )}
    </div>
  );
}

export default EventPage;
