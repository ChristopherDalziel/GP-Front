import React, { Fragment,useState } from "react";
import axios from 'axios';
import { setLocalStorage } from '../utils/local-storage';
import {Link} from 'react-router-dom';
import EmailVerificationForm from '../components/emailverificationform';
import LoginForm from '../components/loginform';
import Nav from "../components/Nav";
import "../css/signIn.css";

const SignIn = (props) => { 
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [passwordReset, setPasswordReset] = useState(false)

const onSubmitLoginForm = async(e) => {
  console.log({email, password})
  try {
    e.preventDefault();
    //response should come back with a token if successful
    const response = await axios.post(process.env.REACT_APP_BACKEND_URL + '/users/login', {
      email,
      password
    } )
    //storing token in local storage
    setLocalStorage(response.data)
    //redirecting back to previous page
    props.history.push('/')
  } catch(err) {
    setError({
      msg: err.message
    })
  }
}

const onSubmitEmailVerificationForm = async (e) => {
  try {
    e.preventDefault();
    setError({
      msg: 'An email has been sent with a link to reset your password'
    })
    await axios.put(process.env.REACT_APP_BACKEND_URL + '/mail/forgotten-password', {
      email
    })
  } catch (err) {
    console.log(err.message)
  }
}

if (passwordReset) {
  return (
    <EmailVerificationForm 
      onSubmitEmailVerificationForm={onSubmitEmailVerificationForm}
      setEmail={setEmail}
      error={error}
    />
  )
} else {
  return ( 
    <>
      <Nav />
        <div>
        <LoginForm 
          onSubmitLoginForm={onSubmitLoginForm}
          setEmail={setEmail}
          error={error}
          setPassword={setPassword}
          setPasswordReset={setPasswordReset}
        />
        <h4>Don't have an account? 
        <Link to="register"> Sign Up Here</Link>
        </h4>
      </div>
    </>
   )
  }
}

export default SignIn
