import React, { Component } from "react";
import "../styles/Events.css";

class Eventpage extends Component {
  render() {
    // const data = this.props.data
    const hostname = this.props.hostname;
    const imgURL = this.props.imgURL;
    const about = this.props.about;
    const date = this.props.date;
    const title = this.props.title;
    const location = this.props.location;
    const time = this.props.time;
    return (
      <main className="main">
        <section className="main-section">
          <div className="image-div">
            <img src={imgURL} alt="insider" />
            {/* <br />
            <h2>
              <u>About</u>
            </h2>
            <br />
            {about} */}
          </div>
          <div className="info-div">
            <div className="title">Title : {title}</div>
            <div className="about">About : {about}</div>
            <div className="date">
              <div className="dateimage">
                {" "}
                <img
                  src=" https://thumbs.dreamstime.com/z/calendar-date-sign-icon-logo-holiday-important-day-concept-time-vector-illustration-196095350.jpg"
                  alt=""
                />
              </div>
              <div className="datedate"> {date}</div>
            </div>
            <div className="time">
              <div className="timeimage">
                <img
                  src="https://img.favpng.com/17/19/8/portable-network-graphics-symbol-time-logo-png-favpng-Q3AeMC4KUu3qnH2AkUNuhgKcQ.jpg "
                  alt=""
                />
              </div>
              <div className="timetime"> {time}</div>
            </div>
            <div className="location">
              <div className="locationimage">
                <img
                  src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-vector-location-icon-png-image_5159127.jpg"
                  alt=""
                />
              </div>
              <div className="locationlocation">Location : {location}</div>
            </div>
            <div className="button">
              <button className="w-1/2">RSVP</button>
            </div>
            <div className="hostname">
              <div className="hostnameimage">
                <img
                  src="https://w7.pngwing.com/pngs/713/762/png-transparent-computer-icons-button-login-image-file-formats-logo-monochrome.png"
                  alt=""
                />
              </div>
              <div className="hosthost">Hostname- {hostname}</div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Eventpage;
