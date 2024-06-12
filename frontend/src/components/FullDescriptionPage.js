import React from "react";
import { useLocation } from "react-router-dom";
import "./../styles/description.css";

const FullDescriptionPage = () => {
  // const location = useLocation();
  // const about = location.state ? location.state.about : null;
  // const title = location.state ? location.state.title : null;
  // const date = location.state ? location.state.date : null;
  // const time = location.state ? location.state.time : null;
  // const locations = location.state ? location.state.locations : null;

  return (
    <div className="w-full">
      <div class="event-container">
        <header class="event-header">
          <h1 class="event-title">Event Title</h1>
        </header>
        <main>
          <section class="event-about">
            <h2>About the Event</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sit amet accumsan tortor. Proin vitae justo sit amet risus
              facilisis vehicula at at erat. Nullam id cursus tortor.
            </p>
          </section>
          <section class="event-details">
            <h2>Event Details</h2>
            <div class="event-detail-item">
              <span class="event-detail-title">Date:</span>
              <span class="event-detail-content">June 25, 2024</span>
            </div>
            <div class="event-detail-item">
              <span class="event-detail-title">Time:</span>
              <span class="event-detail-content">6:00 PM - 9:00 PM</span>
            </div>
            <div class="event-detail-item">
              <span class="event-detail-title">Location:</span>
              <span class="event-detail-content">
                123 Main Street, Anytown, USA
              </span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default FullDescriptionPage;
