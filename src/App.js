import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import ResetPassword from "./pages/resetpassword";
import Profile from "./pages/profile";
import About from "./pages/about";
import Register from "./pages/register";
import SignIn from "./pages/signIn";
import Vaccines from "./pages/vaccines";
import Services from "./pages/services";
import Booking from "./pages/booking";

//Staff
import Staff from "./pages/staff";
import StaffList from "./components/Staff/StaffList";
import EditStaff from "./components/Staff/EditStaff";
import CreatStaff from "./components/Staff/CreatStaff";

// Edit Vaccines & Services (For Admin)
import EditVaccine from "./pages/EditVaccine";
import EditService from "./pages/EditService";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminServices from "./pages/admin/AdminServices";
import AdminVaccines from "./pages/admin/AdminVaccines";

const App = () => {
  return (
    <>
      <BrowserRouter>
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

          <Route path="/staff" component={Staff} />
          <Route path="/admin/staff" component={StaffList} />
          <Route path="/admin/add_staff" component={CreatStaff} />
          <Route path="/admin/edit_staff/:id" component={EditStaff} />

          {/* Admin User Routes */}
          <Route path="/admin_dashboard" component={AdminDashboard} />
          <Route path="/admin_services" component={AdminServices} />
          <Route path="/admin_vaccines" component={AdminVaccines} />

          <Route path="/vaccine/edit/:id" component={EditVaccine} />
          <Route path="/service/edit/:id" component={EditService} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
