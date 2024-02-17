import React, { Component } from "react";
import Logo from "../assets/MANAS_yellow1.png";
import { Link } from "react-router-dom";
import login_img from "../assets/user-login.png";

import "../styles/Navbar.css";

class Navbar extends Component {
  state = { clicked: false, scrollPosition: { top: 0, left: 0 } };
  handleClick = () => {
    const { clicked } = this.state;
    if (clicked) {
      this.enableScroll();
    } else {
      this.disableScroll();
    }
    this.setState({ clicked: !clicked });
  };

  disableScroll = () => {
    // Get the current page scroll position
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    // Store the current scroll position in state
    this.setState({ scrollPosition: { top: scrollTop, left: scrollLeft } });

    // Disable scrolling
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };

  enableScroll = () => {
    // Enable scrolling
    window.onscroll = function () {};
  };
  LogoClick = () => {
    this.state.clicked = false;
    this.enableScroll();
  };
  render() {
    return (
      <nav>
        <Link to="/home">
          <img src={Logo} onClick={this.LogoClick} alt="" />
        </Link>
        <div>
          <ul
            id="navbar"
            className={this.state.clicked ? "#navbar active" : "#navbar"}
          >
            <li>
              <div
                onClick={() => {
                  this.handleClick();
                  this.enableScroll();
                }}
              >
                <Link to="/home"> Home </Link>
              </div>
            </li>
            {/*} <li>
              <div onClick={this.handleClick}>
                <Link to="/Menu"> Events </Link>
              </div>
            </li> *}
            {/* <li>
           <div onClick={this.handleClick}>
                <Link to="/Form"> Events creation </Link>
              </div> 
            </li>*/}
            <li>
              <div
                onClick={() => {
                  this.handleClick();
                  this.enableScroll();
                }}
              >
                <Link to="/event-table"> Events approval </Link>
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  this.handleClick();
                  this.enableScroll();
                }}
              >
                <Link to="/About"> Article </Link>
              </div>
            </li>
            {/* <li>
              <div
                onClick={() => {
                  this.handleClick();
                  this.enableScroll();
                }}
              >
                <Link to="/Urgent-support">Helpline</Link>
              </div>
            </li> */}
            {/*<li>
              <div onClick={this.handleClick}>
                <Link to="/OurTeam">Our Team</Link>
              </div>
          </li>*/}
            <li>
              <div
                onClick={() => {
                  this.handleClick();
                  this.enableScroll();
                }}
              >
                <Link to="./login">
                  <div className="login">
                    <img src={login_img} width={25} height={25}></img>
                    Log Out
                  </div>
                </Link>
              </div>
            </li>
          </ul>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fa fa-bars"}
            ></i>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
