import React from "react";
import { Link } from "react-router-dom";

function Articlelist({ name, author, linkTo, image }) {
  return (
    <div className="menuItem">
      <div className="image-container1" style={{ backgroundImage: `url(${image})` }}>
        <div className="image-overlay1">
          <h1 id="apl">{name}</h1>
          </div>
          <div className="underline">
            <h3 id="ap">{author}</h3>
            </div>
            <div id="button-container">
              <Link to={linkTo} className="button-link">
                Go to Page
              </Link>
            </div>
          </div>
        </div>
     
    
  );
}

export default Articlelist;





