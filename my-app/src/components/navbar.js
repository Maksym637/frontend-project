import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="wrapper-top">
        <ul>
          <li className="nav-area-l nav-area-li">
            <Link to="/home"><i>Home</i></Link>
          </li>
          <li className="nav-area-r nav-area-li">
            <Link to="/user"><i>About User</i></Link>
          </li>
          <li className="nav-area-r nav-area-li">
            <Link to="/login"><i>Log in</i></Link>
          </li>
          <li className="nav-area-r nav-area-li">
            <Link to="/register"><i>Registration</i></Link>
          </li>
        </ul>
      </div>
    );
  }
}
