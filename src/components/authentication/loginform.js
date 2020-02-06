import React from "react";
import { Link } from "react-router-dom";

import "../../css/signIn.css";

//log in form, rendered when user goes to the log in page
export default ({
  onSubmitLoginForm,
  setEmail,
  error,
  setPassword,
  setPasswordReset
}) => (
  <div className="signIn">
    <div className="container">
      <div className="imageSignIn"></div>
      <div className="content-signin">
        <div>
          <h1>Sign In</h1>
          <form onSubmit={onSubmitLoginForm}>
            <div>
              <label className="input-wrapper1" htmlFor="email">
                Email<br></br>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="input-wrapper2" htmlFor="password">
                Password<br></br>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
          <Link to="/signin" onClick={() => setPasswordReset(true)}>
            Forgot your password?
          </Link>
          {error ? <h4 style={{ color: "red" }}>{error.msg}</h4> : null}
          <h4>
            Don't have an account?
            <Link to="register"> Sign Up Here</Link>
          </h4>
        </div>
      </div>
    </div>
  </div>
);
