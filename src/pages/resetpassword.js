import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { setLocalStorage } from "../utils/local-storage";
import { checkPasswordToken } from "../utils/token";
import PasswordResetForm from "../components/authentication/PasswordResetForm";

const ResetPassword = props => {
  const [password, setPassword] = useState(null);
  const [user, setUser] = useState({
    auth: false,
    loading: true
  });

  //setting the token to be the value of the token from the url of the reset password link
  const token = props.match.params.passwordToken;

  //checking the password reset token in the url matches value stored in database, if matching then will load password reset form to allow user to set a new password
  useEffect(() => {
    checkPasswordToken(token, setUser);
  }, [token]);

  const onSubmitPasswordResetForm = async e => {
    try {
      e.preventDefault();
      const response = await axios.put(
        process.env.REACT_APP_BACKEND_URL + "/users/reset-password",
        {
          token,
          password
        }
      );
      setLocalStorage(response.data);
      props.history.push("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  if (user.loading) {
    return null;
  } else if (!user.auth) {
    return <h4>Password Reset Failed</h4>;
  } else {
    return (
      <>
        <PasswordResetForm
          onSubmitPasswordResetForm={onSubmitPasswordResetForm}
          setPassword={setPassword}
        />
      </>
    );
  }
};

export default ResetPassword;
