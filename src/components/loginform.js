import React from "react";
import { Link } from "react-router-dom";

import "../css/signIn.css";

export default ({
  onSubmitLoginForm,
  setEmail,
  error,
  setPassword,
  setPasswordReset
}) => (
<<<<<<< HEAD
  <div>
    <h1>Log In</h1>
    <form onSubmit={onSubmitLoginForm}>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          name="email"
          id="email"
          //changing the state of email to input value
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          //changing the state of password to input value
          onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button>Submit</button>
=======
  <div className="signUp">
    <div className="container">
      <div className="imageSignUp"></div>
      <div className="content-signUp">
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
          <Link to="/login" onClick={() => setPasswordReset(true)}>
            Forgot your password?
          </Link>
          {error ? <h4>{error.msg}</h4> : null}
          <h4>
            Don't have an account?
            <Link to="register"> Sign Up Here</Link>
          </h4>
        </div>
>>>>>>> master
      </div>
    </div>
  </div>
);
