import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import About from "./pages/about";
<<<<<<< HEAD
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
=======
import Signup from "./pages/signup";
import Login from "./pages/login";
import Vaccines from "./pages/vaccines";
import Services from "./pages/services";
import Booking from "./pages/booking";
>>>>>>> master

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About} />
<<<<<<< HEAD
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
=======
            <Route path="/vaccines" component={Vaccines} />
            <Route path="/services" component={Services} />
            <Route path="/booking" component={Booking} />
>>>>>>> master
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
