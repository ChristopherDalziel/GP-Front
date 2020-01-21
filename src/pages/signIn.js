import React, { Fragment,useState } from "react";
// import PropTypes from 'prop-types'
// import {login} from '../actions/auth'
import {Link} from 'react-router-dom'
import Nav from "../components/Nav";
import "../css/signIn.css";

const SignIn = () => { 

  const [formData,setFormData] = useState({
    email:'',
    password:''
    
  });

  const {email,password}= formData

  const onChange=(e)=>setFormData({
    ...formData,[e.target.name]: e.target.value
  })

  const onSubmit =  async e => { 
    e.preventDefault()
    console.log('is-success');
   
  }

  
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
              <form action="" onSubmit={e => onSubmit(e)}>
                <div className="input-wrapper1">
                    <label>Username</label> <br />
                    <input
                      type="text"
                      placeholder="Enter Username"
                      name="email"
                      value={email}
                      onChange={e=>onChange(e)}
                      required
                    />
                  </div>
                  <div className="input-wrapper2">
                    <label>Password</label>
                    <br />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      value={password}
                      onChange={e=>onChange(e)}
                      minLength="6"
                      required
                    />
                  </div>
                  <button type="submit">Sign In</button>
                  <h4>Already have an account? 
                    <Link to="register"> Sign Up Here</Link>
                  </h4>
              </form>  
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SignIn
