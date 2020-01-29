import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../css/Nav.css";

// User to be imported from the schema later..
const Nav = props => {
  // let admin = localStorage.getItem("admin")

  const logout = e => {
    e.preventDefault();

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("admin");
    sessionStorage.removeItem("loggedIn");
    props.history.push("/");
    window.location.reload(false);
  };

  function getAdminStatus() {
    let adminVal = sessionStorage.getItem("admin");
    if (adminVal === "true") {
      adminVal = true;
    } else {
      adminVal = false;
    }
    return adminVal;
  }

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
      <>
        <li>
          <Link to="/logout" onClick={logout}>
            Logout
          </Link>
        </li>
        {admin ? adminItems() : userItems()}
      </>
    );
  };

  const loggedOutItems = () => {
    return (
      <>
        <li>
          <Link to="/signin">Log In</Link>
        </li>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
      </>
    );
  };

  const userItems = () => {
    return (
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    );
  };

  const adminItems = () => {
    return (
      <>
        <li className="two">
          <Link to="/admin/dashboard">Admin Dashboard</Link>
        </li>
        <li className="two">
          <Link to="/admin/staff">Admin Staff</Link>
        </li>
        <li>
          <Link to="/admin/services">Admin Services</Link>
        </li>
        <li>
          <Link to="/admin/vaccines">Admin Vaccines</Link>
        </li>
      </>
    );
  };

  return (
    <div className="nav">
      <ul>
        <li className="one">
          <Link to="/">Home</Link>
        </li>
        {loggedIn ? loggedInItems() : loggedOutItems()}
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/vaccines">Vaccines</Link>
        </li>
        <li>
          <Link to="/booking">Book Now</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Nav);
