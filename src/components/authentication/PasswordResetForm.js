import React from "react";

//password reset form, takes in new password as input
export default ({ onSubmitPasswordResetForm, setPassword }) => (
  <div>
    <h1>Reset Password</h1>
    <form onSubmit={onSubmitPasswordResetForm}>
      <div>
        <label htmlFor="password">New Password</label>
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
  </div>
);
