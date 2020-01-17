import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
