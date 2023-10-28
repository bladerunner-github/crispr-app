import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/img1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> content here </h1>
        <p>content here</p>
        <Link to="./login">
        <button>Log in</button>
        </Link>
        
      </div>
    </div>
  );
}

export default Home;