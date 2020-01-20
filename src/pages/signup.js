import React, { Fragment, useState} from "react";
import Nav from "../components/Nav";
import "../css/signUp.css";

const SignUp =() =>{

  const [formData,setFormData]=useState({
    firstName:'',
    lasrtName:'',
    email:'',
    phone:'',
    password:'',
    password2:''
  });

  const {firstName,lasrtName,email,phone,password,password2}= formData

  return (
    <Fragment>
      <Nav />
      <div className="signUp">
        <div className="container">
          <div className="imageSignUp"></div>
          <div className="content-signUp">
            <div>
              <h1>New to Klinic Doctor Leong?</h1>
              <h1>Sign UP Now</h1>
              <form action="">
                <div className="input-wrapper-1">
                  <label>First Name</label> <br />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="firstName"
                    required
                  />
                </div>
                <div className="input-wrapper-2">
                  <label>Last Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Password"
                    name="pslasrtNamew"
                    required
                  />
                </div>
                <div className="input-wrapper-3">
                  <label>Email</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Password"
                    name="email"
                    required
                  />
                </div>
                <div className="input-wrapper-4">
                  <label>Phone Number</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Password"
                    name="phone"
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
                    required
                  />
                </div>
                <div className="input-wrapper-6">
                  <label>Confirm Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password2"
                    required
                  />
                </div>
                <button type="submit">Sign Up</button>

              </form>

              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SignUp;
