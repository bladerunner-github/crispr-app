import React, { useState } from "react";
import Logo from "../assets/—Pngtree—tree logo png_6595324.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function NavbarModerator() { // Updated component name to follow conventions
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
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
        <Link to="/Contact"> response </Link>
        <button onClick={toggleNavbar}>
          {/* Add button content here */}
        </button>
      </div>
    </div>
  );
}

export default NavbarModerator; // Updated export name
