import React from 'react';

export default ({ onSubmitEmailVerificationForm, setEmail, error}) => (
  <div>
    <h1>Reset Password</h1>
    <form onSubmit={onSubmitEmailVerificationForm} >
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
    {error ? <h4>{error.msg}</h4> : null}
  </div>
)
