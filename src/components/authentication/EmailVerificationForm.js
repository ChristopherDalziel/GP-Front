import React from "react";
import "../../css/success.css";

//Email verification form, rendered when password reset is requested
export default ({ onSubmitEmailVerificationForm, setEmail, error }) => (
  <div className="content-success">
    <h1>Reset Password</h1>
    <form onSubmit={onSubmitEmailVerificationForm}>
      <div>
        <label htmlFor="email">Account Email Address</label> <br />
        <input
          type="email"
          name="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
    {error ? <h4 style={{ color: "red" }}>{error.msg}</h4> : null}
  </div>
);
