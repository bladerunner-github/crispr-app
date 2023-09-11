import React from "react";
import { Link } from "react-router-dom";

import BannerImage from "../assets/img1.jpg";
import "../styles/Home.css";

function home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> content here </h1>
        <p>content here</p>
      <h2>Welcome, username</h2>
        
      </div> 
      <Link to="/">
        <button>Log out</button>
      </Link>
    </div>
  );
}

export default home;