import React from 'react';
import {Link} from 'react-router-dom';

export default ({
  onSubmitLoginForm,
  setEmail,
  error,
  setPassword,
  setPasswordReset
}) => (
  <div>
    <h1>Log In</h1>
    <form onSubmit={onSubmitLoginForm}>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
    <Link to="/login" onClick={() => setPasswordReset(true)}>
      Forgot your password?
    </Link>
    { error ? <h4>{error.msg}</h4>: null}
  </div>
)