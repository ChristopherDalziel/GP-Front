import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import About from "./pages/about";
import SignUp from "./pages/signup";
import SignIn from "./pages/signIn";
import Vaccines from "./pages/vaccines";
import Services from "./pages/services";
import Booking from "./pages/booking";

dotenv.config();

async function handleFormSubmit(values) {
  values.preventDefault();
  const { name, contactNumber, email, message } = values;
  try {
    const res = await axios.post(process.env.REACT_APP_BACKEND_URL + "/send", {
      name,
      contactNumber,
      email,
      message
    });
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signIn" component={SignIn} />
            <Route
              path="/contact"
              render={() => <Contact handleFormSubmit={handleFormSubmit} />}
            />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/vaccines" component={Vaccines} />
            <Route path="/services" component={Services} />
            <Route path="/booking" component={Booking} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
