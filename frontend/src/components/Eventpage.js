/* eslint-disable */
import React, { Component } from "react";
import "../styles/Events.css";
import FullDescriptionPage from "./FullDescriptionPage";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

class Eventpage extends Component {
  render() {
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
                    <i class="fa-solid fa-circle-info"></i>
                    {truncateText(about, 6)}
                    <br />
                    <br />
                    <Link
                      to="/description"
                      className="custom-btn btn-3 border-2 border-red-800"
                      state={{
                        // imagePath: imgURL,
                        about: about,
                        title: title,
                        date: date,
                        time:time,
                        locations: location,
                      }}
                    >
                      Read more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Eventpage;
