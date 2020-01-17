import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import About from "./pages/about";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
