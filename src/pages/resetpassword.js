import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Nav from "../components/Nav";
import {setLocalStorage} from '../utils/local-storage';
import {checkPasswordToken} from '../utils/token';
import PasswordResetForm from '../components/PasswordResetForm.js';

const ResetPassword = (props) => {
  const [password, setPassword] = useState(null);
  const [user, setUser] = useState({
    auth: false,
    loading: true
  })

  const token = props.match.params.passwordToken
  // console.log(token);

  useEffect(() => {
    checkPasswordToken(token, setUser)
  }, [token])

  const onSubmitPasswordResetForm = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.put(process.env.REACT_APP_BACKEND_URL + '/users/reset-password', {
        token, password
      }) //sending token and new password to back end
      setLocalStorage(response.data) //storing the new token
      props.history.push('/')
    } catch (err) {
      console.log(err.message)
    }
  }

  if (user.loading) {
    return null
  } else if (!user.auth) {
    return (<h4>Password Reset Failed</h4>)
  } else {
    return (
    <>
      <Nav />
      <PasswordResetForm onSubmitPasswordResetForm={onSubmitPasswordResetForm}
      setPassword={setPassword} />
    </>
    )
  }
}

export default ResetPassword