import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import About from "./pages/about";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Vaccines from "./pages/vaccines";
import Services from "./pages/services";

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
            <Route path="/vaccines" component={Vaccines} />
            <Route path="/services" component={Services} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
