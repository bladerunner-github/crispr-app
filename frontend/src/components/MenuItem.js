import React from "react";

function MenuItem({ image, name, date }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {date} </p>
    </div>
  );
}

export default MenuItem;
