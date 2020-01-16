import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

function Nav({ user }) {
  const isAdmin = user && user.role === "admin";

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
        {/* If the user is an admin */}
        {isAdmin ? (
          <li>
            <Link to="/">ADMIN FUNCTION</Link>
          </li>
        ) : null}
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
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
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Nav;
