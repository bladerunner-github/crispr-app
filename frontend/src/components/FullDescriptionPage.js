// FullDescriptionPage.js

import React from "react";
import { useLocation } from "react-router-dom";

const FullDescriptionPage = () => {
  // Get the current location and access the state passed from the previous page
  const location = useLocation();
  const { about } = location.state;
  console.log("about description", about);

  return (
    <div>
      <h2>Full Description</h2>
      <p>{about}</p>
    </div>
  );
};

export default FullDescriptionPage;
