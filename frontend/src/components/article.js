import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, author, linkTo }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <h3>{author}</h3> <div className="button-container">
      <Link to={linkTo} className="button-link">
        Go to Page
      </Link> </div>
    </div>
  );
}

export default MenuItem;