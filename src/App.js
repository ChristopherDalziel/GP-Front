import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/profile";
import About from "./pages/about";
import Register from "./pages/register";
import SignIn from "./pages/signIn";
import Vaccines from "./pages/vaccines";
import Services from "./pages/services";
import Booking from "./pages/booking";
import Staff from "./pages/staff";
import CreateVaccine from "./pages/CreateVaccine";
import EditVaccine from "./pages/EditVaccine";
import CreateService from "./pages/CreateService";
import EditService from "./pages/EditService";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/:passwordToken/reset-password" component={ResetPassword} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/vaccines" component={Vaccines} />
          <Route path="/services" component={Services} />
          <Route path="/booking" component={Booking} />
          <Route path="/staff" component={Staff} />
          <Route path="/vaccine/create" component={CreateVaccine} />
          <Route path="/vaccine/edit/:id" component={EditVaccine} />
          <Route path="/service/create" component={CreateService} />
          <Route path="/service/edit/:id" component={EditService} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
