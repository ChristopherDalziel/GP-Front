import React from "react";
// import "../css/register.css";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import RegistrationForm from "../components/authentication/registrationform";
import { setLocalStorage } from "../utils/local-storage";
import ProgressBar from "../utils/pageLoading";

class Registration extends React.Component {
  state = {
    email: null,
    firstName: null,
    lastName: null,
    phone: null,
    password: null,
    password2: null,
    errors: null,
    loading: true
  };

  componentDidMount() {
    let token = sessionStorage.getItem("token");
    if (token) {
      try {
        axios
          .get(process.env.REACT_APP_BACKEND_URL + "/users/find-user", {
            headers: { Authorization: token }
          })
          .then(response => {
            const user = response.data;
            this.setState({
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              phone: user.phone
            });
          });
      } catch (err) {
        this.setState({ errors: err.message });
        console.log(err.message);
      }
    }
    this.setState({ loading: false });
  }

  registrationSubmit = async values => {
    try {
      const newUser = values;
      await axios
        .post(process.env.REACT_APP_BACKEND_URL + "/users/register", newUser)
        .then(response => {
          alert("Registration successful");
          setLocalStorage(response.data);
          this.props.history.push("/");
        });
    } catch (err) {
      console.log(err.response.data.err.message);
      this.setState({ errors: err.response.data.err.message });
    }
  };

  render() {
    const { email, firstName, lastName, phone } = this.state;
    return (
      <>
        {this.state.loading && <ProgressBar />}

        <div className="signUp">
          <div className="container">
            <div className="imageSignUp"></div>
            <div className="content-signUp">
              <div>
                <h1>New to Klinic Doctor Leong?</h1>
                <h1>Sign Up Now</h1>
                <RegistrationForm onSubmit={this.registrationSubmit} />
              </div>
              <div>
                <h4 style={{ color: "red" }}>{this.state.errors}</h4>
              </div>
              <div>
                <h4>
                  Already have an account?
                  <Link to="signin"> Sign In Here</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Registration;
