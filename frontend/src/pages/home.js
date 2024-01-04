// import React from "react";
// import { Link } from "react-router-dom";
// // import BannerImage from "../assets/img1.jpg";
// // import "../styles/Home.css";
// import ImageSlider from '../components/ImageSlider';
// import SliderData from '../components/SliderData';
// import Blog from '../components/Blog';
// import Banner from "../components/Banner";

// function Home() {
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

// export default Home;

import React from "react";
import Blog from "../components/Blog";
import Banner from "../components/Banner";
import ImageSlider from '../components/ImageSlider';
import SliderData  from '../components/SliderData';
import Buzzer_btn from "../components/Buzzer_btn";
import "../styles/Home.css";

function Home() {
  return (
         <div>
    <ImageSlider slides={SliderData} /> 
    <Buzzer_btn/>   
    <Banner />
    
    <div className="all-blogs">
      <Blog />
      <Blog />
      <Blog />
    </div>
    </div>
  );
}

export default Home;
