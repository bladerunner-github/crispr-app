import React, { useState } from "react";
import Logo from "../assets/CRISPR_white.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import login_img from "../assets/user-login.png";
import hamburger from "../assets/hamburger.svg";

function NavbarModerator() { // Updated component name to follow conventions
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" height={70} width={150} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/Menu"> Menu </Link>
          <Link to="/About"> About </Link>
          <Link to="/Contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/Menu"> Events </Link>
        <Link to="/Form"> Events creation </Link>
        <Link to="/Approval"> Events approval </Link>
        <Link to="/About"> Article approval </Link>
        <Link to="/Contact"> Response </Link>
        <Link to="/">
          <div className="login">
            <img src={login_img} width={25} height={25}></img>
            Log out
          </div>
        </Link>
        <button onClick={toggleNavbar}>
          {/* Add button content here */}
        </button>
        <div className="hamburger">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </div>
    </div>
  );
}

export default NavbarModerator; // Updated export name
