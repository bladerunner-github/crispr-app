// import React from "react";
// import { Link } from "react-router-dom";

// import BannerImage from "../assets/img1.jpg";
// import "../styles/Home.css";
// import ImageSlider from '../components/ImageSlider';
// import SliderData from '../components/SliderData';
// import Blog from '../components/Blog';
// import Banner from "../components/Banner";

// function home() {
//   return (
//     <div>
//       <ImageSlider slides={SliderData} />
//       <Banner />
//       <div className="all-blogs">
//         <Blog />
//         <Blog />
//         <Blog />
//       </div>
//     </div>
//   );
// }

// export default home;




// import React from "react";
// import ImageSlider from '../components/ImageSlider';
// import SliderData from '../components/SliderData';
// import Blog from '../components/Blog';
// import Banner from "../components/Banner";

// function HomeUser() {
//   return (
//     <div>
//       <ImageSlider slides={SliderData} />
//       <Banner />
//       <div className="all-blogs">
//         <Blog />
//         <Blog />
//         <Blog />
//       </div>
//     </div>
//   );
// }

// export default HomeUser;
import React from "react";
import ImageSlider from '../components/ImageSlider';
import SliderData from '../components/SliderData';
import Blog from '../components/Blog';
import Banner from "../components/Banner";

function HomeUser() {
  return (
    <div>
      <ImageSlider slides={SliderData} />
      <Banner />
      <div className="all-blogs">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
}

export default HomeUser;

