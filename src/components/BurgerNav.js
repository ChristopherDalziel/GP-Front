import React from "react";
import { Link, withRouter } from "react-router-dom";
import getAdminStatus from "../utils/getAdminStatus";
import "../css/BurgerNav.css";

const BurgerNav = props => {
  const logout = e => {
    e.preventDefault();

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("admin");
    sessionStorage.removeItem("loggedIn");
    props.history.push("/");
    window.location.reload(false);
  };

  function getLoggedInStatus() {
    let loggedInVal = sessionStorage.getItem("loggedIn");
    if (loggedInVal === "true") {
      loggedInVal = true;
    } else {
      loggedInVal = false;
    }
    return loggedInVal;
  }

  let admin = getAdminStatus();
  let loggedIn = getLoggedInStatus();

  const loggedInItems = () => {
    return (
      <ul>
        <Link to="/logout" onClick={logout}>
          <li>Logout</li>
        </Link>

        {admin ? null : userItems()}
      </ul>
    );
  };

  const loggedOutItems = () => {
    return (
      <ul>
        <Link to="/signin">
          <li>Log In</li>
        </Link>

        <Link to="/register">
          <li>Sign Up</li>
        </Link>
      </ul>
    );
  };

  const userItems = () => {
    return (
      <Link to="/profile">
        <li>Profile</li>
      </Link>
    );
  };

  return (
    <nav>
      <div className="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>
        <ul className="menu">
          <Link to="/">
            <li>Home</li>
          </Link>
          {loggedIn ? loggedInItems() : loggedOutItems()}
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/vaccines">
            <li>Vaccines</li>
          </Link>
          <Link to="/booking">
            <li>Book Now</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(BurgerNav);
