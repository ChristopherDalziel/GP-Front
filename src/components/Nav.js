import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../css/Nav.css";
import Axios from "axios";

function logout (e, history) {
  e.preventDefault();
  localStorage.removeItem('token');

}

// User to be imported from the schema later..
function Nav(props) {

  let token = localStorage.getItem('token');
  async function getUser(token) {
    let response = await Axios.get(process.env.REACT_APP_BACKEND_URL + `/users/find-user/${token}`)
    console.log(response.data)
    return response.data
  }

  const user = getUser(token);
  console.log(user)
  
  const isAdmin = user && user.admin === true;

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
              <Link to="/" onClick={logout}>Logout</Link>
            </li>
          </>
      ) : (
          /* // If there IS NOT a user do this */
          <>
            <li>
              <Link to="/signin">Log In</Link>
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

export default Nav;
