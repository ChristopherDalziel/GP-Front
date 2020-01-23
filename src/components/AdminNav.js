import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../css/Nav.css";

// User to be imported from the schema later..
function AdminNav(props) {

  return (
    <div className="nav">
      <ul>
        <li className="one">
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/" onClick={this.props.logout}>Logout</Link>
        </li>
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


          {/* // this is the links when login as a admin(temporarily put here) */}
          
          <div className="dropdown">
          <span>welcome back!</span>
          <div className="dropdown-content">
          <Link to="/contact">Users</Link> <br/>
          <Link to="/staff">Staffs</Link> <br/>
          <Link to="/contact">Services</Link> <br/>
          <Link to="/contact">VACCINES</Link>
          </div>
          </div>


    
      </ul>
    </div>
  );
}

export default AdminNav;
