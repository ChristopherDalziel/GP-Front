import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Nav from "./components/Nav";
import Contact from "./pages/contact";
import ResetPassword from "./pages/resetpassword";
import Profile from "./pages/profile";
import About from "./pages/about";
import Register from "./pages/register";
import SignIn from "./pages/signIn";
import Vaccines from "./pages/vaccines";
import Services from "./pages/services";
import Booking from "./pages/booking";
import SuccessPage from "./pages/success";

//Staff
import StaffList from "./components/Staff/StaffList";
import EditStaff from "./components/Staff/EditStaff";
import CreateStaff from "./components/Staff/CreateStaff";

// Edit Vaccines & Services (For Admin)
import EditVaccine from "./pages/EditVaccine";
import EditService from "./pages/EditService";

import AdminServices from "./pages/admin/AdminServices";
import AdminVaccines from "./pages/admin/AdminVaccines";

//Admin Dashboard
import AdminDashboard from "./pages/admin/AdminDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/signIn" component={SignIn} />
          <Route
            path="/:passwordToken/reset-password"
            component={ResetPassword}
          />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/vaccines" component={Vaccines} />
          <Route path="/services" component={Services} />
          <Route path="/booking" component={Booking} />
          <Route exact path="/success" component={SuccessPage} />

          {/* <Route path="/staff" component={Staff} /> */}
          <Route path="/admin/staff" component={StaffList} />
          <Route path="/admin/add_staff" component={CreateStaff} />
          <Route path="/admin/update_staff/:id" component={EditStaff} />

          {/* Admin User Routes */}
          <Route path="/admin/dashboard" component={AdminDashboard} />
          
          <Route path="/admin/services" component={AdminServices} />
          <Route path="/admin/vaccines" component={AdminVaccines} />

          <Route path="/vaccine/edit/:id" component={EditVaccine} />
          <Route path="/service/edit/:id" component={EditService} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
