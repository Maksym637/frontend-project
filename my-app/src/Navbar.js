import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="">
        <ul>
          <li className="">
            <Link to="/home">Home</Link>
          </li>
          <li className="n">
            <Link to="/user">Registration</Link>
          </li>
          <li className="">
            <Link to="/login">Login Form</Link>
          </li>
        </ul>
      </div>
    );
  }
}