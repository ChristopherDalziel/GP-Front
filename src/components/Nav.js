import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

// User to be imported from the schema later..
function Nav({ user }) {
  const isAdmin = user && user.role === "admin";

  return (
    <div className="nav">
      <ul>
        <li className="one">
          <Link to="/">Home</Link>
        </li>
        {/* If the user IS an admin */}
        {isAdmin ? (
          <li className="two">
            <Link to="/">ADMIN FUNCTION</Link>
          </li>
        ) : // If user IS NOT an admin
        null}
        {user ? (
          // If there IS a user do this
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              {/* onClick Logout function */}
              <Link to="/logout">Logout</Link>
            </li>
          </>
        ) : (
          // If there IS NOT a user do this
          <>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </>
        )}
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
}

export default Nav;
