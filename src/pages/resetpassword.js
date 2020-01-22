import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {setLocalStorage} from '../utils/local-storage';
import {checkPasswordToken} from '../utils/token';
import PasswordResetForm from '../components/passwordresetform';

function ResetPassword (props) {
  const [password, setPassword] = useState(null);
  const [user, setUser] = useState({
    auth: false,
    loading: true
  })

  const token = props.match.params.checkPasswordToken

  useEffect(() => {
    checkPasswordToken(token, setUser)
  }, [token])

  const onSubmitPasswordResetForm = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.put(process.env.REACT_AP_BACKEND_URL + '/users/reset-password', {
        token, password
      })
      setLocalStorage(response.data)
      props.history.push('/')
    } catch (err) {
      console.log(err.message)
    }
  }

  if (user.loading) {
    return null
  } else if (!user.auth) {
    return <Redirect to="/login" />
  } else {
    return (
      <PasswordResetForm onSubmitPasswordResetForm={onSubmitPasswordResetForm}
      setPassword={setPassword} />
    )
  }
}

export default ResetPassword