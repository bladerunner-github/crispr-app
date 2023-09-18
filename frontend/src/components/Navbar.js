import React, { useState } from "react";
import Logo from "../assets/CRISPR_white.png";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.svg";
import login_img from "../assets/user-login.png"

import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} width={150} height={70} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/Menu"> Menu </Link>
          <Link to="/About"> About </Link>
          <Link to="Contact"> Contact </Link>
          {/* <div className="hamburger">
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </div> */}
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/Menu"> Events </Link>
        <Link to="/About"> Article </Link>
        <Link to="/Contact"> Buzzer </Link>
        <Link to="./login">
          <div className="login">
            <img src={login_img} width={25} height={25}></img>
            Log in
          </div>
        </Link>
        <button onClick={toggleNavbar}>

        </button>
        <div className="hamburger">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </div>

    </div>


  );
}

export default Navbar;