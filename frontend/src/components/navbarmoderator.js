import React, { Component } from "react";
import Logo from "../assets/MANAS_yellow1.png";
import { Link } from "react-router-dom";
import login_img from "../assets/user-login.png"

import "../styles/Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav>
        <Link to="/home">
          <img src={Logo} />
        </Link>
        <div>
          <ul id="navbar" className={this.state.clicked ? '#navbar active' : '#navbar'}>
            <li>
              <div onClick={this.handleClick}>
                <Link to="/home"> Home </Link>
              </div>
            </li>
            <li>
              <div onClick={this.handleClick}>
                <Link to="/Menu"> Events </Link>
              </div>
            </li>
            <li>
              <div onClick={this.handleClick}>
                <Link to="/Form"> Events creation </Link>
              </div>
            </li>
            <li>
              <div onClick={this.handleClick}>
                <Link to="/event-table"> Events approval </Link>
              </div>
            </li>
            <li>
              <div onClick={this.handleClick}>
                <Link to="/About"> Article approval </Link>
              </div>
            </li>
            <li>
              <div onClick={this.handleClick}>
                <Link to="/Contact"> Response </Link>
              </div>
            </li>
            <li>
              <div onClick={this.handleClick}>
                <Link to="/OurTeam">Our Team</Link>
              </div>
            </li>
            <li>
              <div onClick={this.handleClick}>
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
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fa fa-bars"}></i>

          </div>
        </div>
      </nav>


    );
  }
}

export default Navbar;
