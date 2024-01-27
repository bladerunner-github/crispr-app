import React from "react";

const FullDescriptionPage = (props) => {
  // Access the full description and title from the URL parameters
  const { match, location } = props;
  const { params } = match;
  const { title } = params;

  // Access the about prop from the location state
  const { state } = location;
  const { about } = state || {};

  // Use the title and about to display the full description
  const fullDescription = about || "No description available.";
  console.log(fullDescription);
  return (
    <div>
      <h2>Full Description for {title}</h2>
      <p>{fullDescription}</p>
      {/* You can add additional styling or components as needed */}
    </div>
  );
};

export default FullDescriptionPage;
