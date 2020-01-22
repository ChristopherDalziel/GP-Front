import React, { useState } from "react";
import axios from "axios";
import { setLocalStorage } from "../utils/local-storage";
import EmailVerificationForm from "../components/emailverificationform";
import LoginForm from "../components/loginform";
import Nav from "../components/Nav";
import "../css/signIn.css";

const SignIn = props => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [passwordReset, setPasswordReset] = useState(false);

  const onSubmitLoginForm = async e => {
    console.log({ email, password });
    try {
      e.preventDefault();
      const response = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/users/login",
        {
          email,
          password
        }
      );
      console.log(response.data);
      setLocalStorage(response.data);
      props.history.push("/");
    } catch (err) {
      setError({
        msg: err.message
      });
    }
  };

  const onSubmitEmailVerificationForm = async e => {
    try {
      e.preventDefault();
      setError({
        msg: "An email has been sent with a link to reset your password"
      });
      await axios.put(
        process.env.REACT_APP_BACKEND_URL + "/mail/forgotten-password",
        {
          email
        }
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  if (passwordReset) {
    return (
      <EmailVerificationForm
        onSubmitEmailVerificationForm={onSubmitEmailVerificationForm}
        setEmail={setEmail}
        error={error}
      />
    );
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
        </div>
      </>
    );
  }
};

export default SignIn;
