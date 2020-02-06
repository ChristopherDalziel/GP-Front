import React from "react";
import { Link, withRouter } from "react-router-dom";
import getAdminStatus from "../utils/getAdminStatus";
import "../css/Nav.css";

const Nav = props => {
  const logout = e => {
    e.preventDefault();

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("val");
    sessionStorage.removeItem("auth");
    props.history.push("/");
    window.location.reload(false);
  };

  function getLoggedInStatus() {
    let loggedInVal = sessionStorage.getItem("auth");
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
        <li className="navbtn">
          <Link to="/logout" onClick={logout}>
            Logout
          </Link>
        </li>

        {admin ? (
          <li className="dropdown">
            <p>Admin Dashboard</p>
            <div className="dropdown-content">{adminItems()}</div>
          </li>
        ) : (
          userItems()
        )}
      </ul>
    );
  };

  const loggedOutItems = () => {
    return (
      <ul>
        <li className="navbtn">
          <Link className="navbtn" to="/signin">
            Log In
          </Link>
        </li>
        <li className="navbtn">
          <Link to="/register">Sign Up</Link>
        </li>
      </ul>
    );
  };

  const userItems = () => {
    return (
      <li className="navbtn">
        <Link to="/profile">Profile</Link>
      </li>
    );
  };

  const adminItems = () => {
    return (
      <>
        <li className="two">
          <Link to="/admin/users">Users</Link>
        </li>
        <li className="two">
          <Link to="/admin/appointments">Appointments</Link>
        </li>
        <li>
          <Link to="/admin/staff">Staff</Link>
        </li>
        <li>
          <Link to="/admin/services">Services</Link>
        </li>
        <li>
          <Link to="/admin/vaccines">Vaccines</Link>
        </li>
        <li>
          <Link to="/admin/opening-hours">Klinik Hours</Link>
        </li>
      </>
    );
  };

  return (
    <>
      <div className="nav">
        <ul>
          <li className="one">
            <Link to="/">Home</Link>
          </li>
          {loggedIn ? loggedInItems() : loggedOutItems()}
          <li className="navbtn">
            <Link to="/about">About Us</Link>
          </li>
          <li className="navbtn">
            <Link to="/services">Services</Link>
          </li>
          <li className="navbtn">
            <Link to="/vaccines">Vaccines</Link>
          </li>
          <li className="navbtn">
            <Link to="/booking">Book Now</Link>
          </li>
          <li className="navbtn">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default withRouter(Nav);
