import React from "react";
import { articlelist } from "../helpers/articlelist";
import MP from "../assets/img1.jpg";
import Image1 from "../assets/a1.webp";
import Image2 from "../assets/a2.webp";
import Image3 from "../assets/a33.png";
import Image4 from "../assets/a444.png";
import Image5 from "../assets/a555.jpg";
import Image6 from "../assets/a6.webp";
import Articlelist from "../components/article";
import "../styles/Article.css";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MP})` }}
      ></div>
      <div className="aboutBottom">
        <h1 id="heading">ARTICLES</h1>
        <div className="menu">
          <div className="menuList">
            {articlelist.map((menuItem, index) => (
              <Articlelist
                key={index}
                name={menuItem.name}
                author={menuItem.author}
                linkTo={menuItem.link}
                image={images[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
