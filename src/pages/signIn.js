import React, { useState, useEffect } from "react";
import axios from "axios";
import { setLocalStorage } from "../utils/local-storage";
import EmailVerificationForm from "../components/authentication/EmailVerificationForm";
import LoginForm from "../components/authentication/loginform";
import "../css/signIn.css";
import ProgressBar from "../utils/pageLoading";

const SignIn = props => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [passwordReset, setPasswordReset] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const onSubmitLoginForm = async e => {
    try {
      e.preventDefault();
      //response should return a token if successful
      await axios
        .post(process.env.REACT_APP_BACKEND_URL + "/users/login", {
          email,
          password
        })
        .then(response => {
          setLocalStorage(response.data);
          props.history.push("/");
          window.location.reload(false);
          //redirecting back to home page
        });
    } catch (err) {
      setError({
        msg: err.response.data.err.message
      });
    }
  };

  //if the password reset form is submitted
  const onSubmitEmailVerificationForm = async e => {
    try {
      e.preventDefault();
      setError({
        msg: "An email has been sent with a link to reset your password"
      });
      await axios.put(
        process.env.REACT_APP_BACKEND_URL + "/mail/reset-password",
        {
          email
        }
      );
    } catch (err) {
      console.log(err.message);
      setError({msg: err.response.data.err.message})
    }
  };

  if (passwordReset) {
    return (
      <>
        <div>
          <EmailVerificationForm
            onSubmitEmailVerificationForm={onSubmitEmailVerificationForm}
            setEmail={setEmail}
            error={error}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        {loading && <ProgressBar />}

        <div>
          <LoginForm
            onSubmitLoginForm={onSubmitLoginForm}
            setEmail={setEmail}
            error={error}
            setPassword={setPassword}
            setPasswordReset={setPasswordReset}
          />
        </div>
      </>
    );
  }
};

export default SignIn;
