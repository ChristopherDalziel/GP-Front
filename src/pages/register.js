import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// import {connect} from 'react-redux'
import Nav from "../components/Nav";
import "../css/register.css";
import axios from "axios";
import { setLocalStorage } from "../utils/local-storage";
// import {register} from '../actions/auth'
// import PropTypes from 'prop-types'

const Register = props => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    password2: ""
  });
  const [error, setError] = useState(null);

  const { firstName, lastName, email, phone, password, password2 } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setError(<h3 className="error"> "Passwords do not match"</h3>);
    } else {
      const newUser = {
        firstName,
        lastName,
        email,
        phone,
        password
      };
      try {
        await axios
          .post(process.env.REACT_APP_BACKEND_URL + "/users/register", newUser)
          .then(response => {
            alert("Registration successful");
            setLocalStorage(response.data);
          });
      } catch (err) {
        console.log(err.message);
        setError("Registration unsuccessful: An error occurred");
      }
    }
  };

  return (
    <Fragment>
      <Nav />
      <div className="signUp">
        <div className="container">
          <div className="imageSignUp"></div>
          <div className="content-signUp">
            <div>
              <h1>New to Klinic Doctor Leong?</h1>
              <h1>Sign Up Now</h1>
              <form onSubmit={e => onSubmit(e)}>
                <div className="input-wrapper-1">
                  <label>First Name</label> <br />
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    name="firstName"
                    value={firstName}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className="input-wrapper-2">
                  <label>Last Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className="input-wrapper-3">
                  <label>Email</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className="input-wrapper-4">
                  <label>Phone Number</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Your Phone Number"
                    name="phone"
                    value={phone}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className="input-wrapper-5">
                  <label>Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className="input-wrapper-6">
                  <label>Confirm Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div>{error}</div>
                <div>
                  <button type="submit">Sign Up</button>
                </div>
                <h4>
                  Already have an account?
                  <Link to="signin"> Sign In Here</Link>
                </h4>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
