import React, { Fragment,useState } from "react";
import Nav from "../components/Nav";

import "../css/signIn.css";

const  SignIn=()=>{

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
    console.log("success");
    
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
                    required
                  />
                </div>
                <button type="submit">Sign In</button>

            </form>

              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default SignIn;
