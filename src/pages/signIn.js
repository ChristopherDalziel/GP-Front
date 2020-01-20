import React, { Fragment } from "react";
import Nav from "../components/Nav";
import "../css/signIn.css";

function signIn() {
  return (
    <Fragment>
      <Nav />
      <div className="signIn">
        <div className="container">
          <div className="imageSignIn"></div>
          <div className="content-signin">
            <div>
              <h1>Sign In Here</h1>
              <h5>Welcome Back!</h5>
            
              <div className="input-wrapper1">
                <label>Username</label> <br />
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                />
              </div>
              <div className="input-wrapper2">
                <label>Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                />
              </div>
              <button type="submit">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// test

export default signIn;
