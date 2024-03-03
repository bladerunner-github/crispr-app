import React, { Component } from "react";
import "../styles/Events.css";
import FullDescriptionPage from "./FullDescriptionPage";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
class Eventpage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     events: [
  //       // Initialize with any existing events
  //       {
  //         id: 1,
  //         hostname: this.props.hostname,
  //         imgURL: this.props.imgURL,
  //         about: this.props.about,
  //         date: this.props.date,
  //         title: this.props.title,
  //         location: this.props.location,
  //         time: this.props.time,
  //         // ... other event properties
  //       },
  //       // Add more initial events as needed
  //     ],
  //   };
  // }

  // handleEventApproval = (newEventData) => {
  //   // Update the state with the new event data
  //   this.setState((prevState) => ({
  //     events: [...prevState.events, newEventData],
  //   }));
  // };
  // constructor(props) {
  // super(props);
  // }
  // handleDescriptionClick = () => {
  //   const { about } = this.props;
  //   // Navigate to the description page with the about content as a parameter
  //   this.props.history.push("/description", { about });
  // };
  render() {
    // const data = this.props.data
    const hostname = this.props.hostname;
    const imgURL = this.props.imgURL;
    const about = this.props.about;
    const date = this.props.date;
    const title = this.props.title;
    const location = this.props.location;
    const time = this.props.time;

    const truncateText = (text, limit) => {
      const words = text.split(" ");
      if (words.length > limit) {
        return words.slice(0, limit).join(" ") + "...";
      }
      return text;
    };
    // const description = () => {
    //   navigate("/description");
    // };
    console.log(about);
    return (
      // third attempt

      <div class="containerss">
        <div class="item-container">
          <div class="img-container">
            <img src={imgURL} alt="Event" />
          </div>

          <div class="body-container text-left">
            {/* <div class="overlay"></div> */}

            <div class="event-info">
              <p class="title">{title}</p>
              {/* <div class="separator"></div> */}
              {/* 
              <p class="info">IIIT NAGPUR</p> */}
              <p class="price">{hostname}</p>

              <div class="additional-info">
                <div className="info-left">
                  <p class="info">
                    <i class="fas fa-map-marker-alt"></i>
                    {location}
                  </p>
                  <p class="info">
                    <i class="far fa-calendar-alt"></i>
                    {date}-{time}
                  </p>

                  <p className="info description">
                    {/* {about.length > 20 ? `${about.slice(0, 20)}...` : about}{" "}
                  <span>
                    <Link
                      to={`/full-description/${title}`}
                      state={{ about: about }}
                    >
                      more...
                    </Link>
                  </span> */}
                    {truncateText(about, 6)}
                    <br />
                    <br />
                    <Link
                      to={{ pathname: "/description", state: { about: about } }}
                      className="custom-btn btn-3 border-2 border-red-800"
                    >
                      Read more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* <button class="action">Book it</button> */}
          </div>
        </div>
      </div>

      // second attempt

      // <section class="contents-wrap">
      //   <div class="eventsss">
      //     <div class="flags">
      //       <div class="flags-body">
      //         <p class="flags-date">{date}</p>
      //       </div>
      //       <div class="flags-points"></div>
      //     </div>
      //     <div>
      //       <h2>{title}</h2>
      //       <img src={imgURL} alt="" />
      //       <h2>location--{location}</h2>
      //     </div>
      //   </div>

      // </section>

      // first attempt

      // <main className="mains">
      //   <section className="main-section">
      //     <div className="image-div">
      //       <div className="title">Title : {title}</div>
      //       <img src={imgURL} alt="insider" />
      //     </div>
      //     <div className="info-div">
      //       <div className="abouts">About : {about}</div>
      //       <div className="date">
      //         <div className="dateimage">
      //           {" "}
      //           <img
      //             src=" https://thumbs.dreamstime.com/z/calendar-date-sign-icon-logo-holiday-important-day-concept-time-vector-illustration-196095350.jpg"
      //             alt=""
      //           />
      //         </div>
      //         <div className="datedate"> {date}</div>
      //       </div>
      //       <div className="time">
      //         <div className="timeimage">
      //           <img
      //             src="https://img.favpng.com/17/19/8/portable-network-graphics-symbol-time-logo-png-favpng-Q3AeMC4KUu3qnH2AkUNuhgKcQ.jpg "
      //             alt=""
      //           />
      //         </div>
      //         <div className="timetime"> {time}</div>
      //       </div>
      //       <div className="location">
      //         <div className="locationimage">
      //           <img
      //             src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-vector-location-icon-png-image_5159127.jpg"
      //             alt=""
      //           />
      //         </div>
      //         <div className="locationlocation">Location : {location}</div>
      //       </div>

      //       <div className="hostname">
      //         <div className="hostnameimage">
      //           <img
      //             src="https://w7.pngwing.com/pngs/713/762/png-transparent-computer-icons-button-login-image-file-formats-logo-monochrome.png"
      //             alt=""
      //           />
      //         </div>
      //         <div className="hosthost">Hostname- {hostname}</div>
      //       </div>
      //     </div>
      //   </section>
      // </main>
    );
  }
}

export default Eventpage;
