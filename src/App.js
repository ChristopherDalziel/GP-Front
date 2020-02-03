import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


// Pages
import ProtectedRoute from './ProtectedRoute';
import ProtectedAdminRoute from './ProtectedAdminRoute';
import Home from "./pages/home";
import Nav from "./components/Nav";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import About from "./pages/about";
import Register from "./pages/register";
import SignIn from "./pages/signIn";
import Vaccines from "./pages/vaccines";
import Services from "./pages/services";
import Booking from "./pages/booking";
import SuccessPage from "./pages/success";

// Password Reset
import ResetPassword from "./pages/resetpassword";

// Staff
import StaffList from "./components/Staff/StaffList";
import EditStaff from "./components/Staff/EditStaff";
import CreateStaff from "./components/Staff/CreateStaff";

// Edit Vaccines & Services (For Admin)
import EditVaccine from "./pages/EditVaccine";
import EditService from "./pages/EditService";
import AdminServices from "./pages/admin/AdminServices";
import AdminVaccines from "./pages/admin/AdminVaccines";

// Admin Dashboard
import AdminUsers from "./pages/admin/AdminUsers";
import HoursForm from "./components/Contact/openingHoursEdit";
import EditUserInfo from "./components/admin_dashboard/EditUserInfo";
import AppointmentsList from "./components/admin_dashboard/AppointmentsList";
import AboutEdit from "./components/admin_dashboard/EditAbout";
import AboutForm from "./components/admin_dashboard/aboutEditForm";

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
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/vaccines" component={Vaccines} />
          <Route path="/services" component={Services} />
          <Route path="/booking" component={Booking} />
          <Route exact path="/success" component={SuccessPage} />

          {/* <Route path="/staff" component={Staff} /> */}
          <ProtectedAdminRoute path="/admin/staff" component={StaffList} />
          <ProtectedAdminRoute path="/admin/add_staff" component={CreateStaff} />
          <ProtectedAdminRoute path="/admin/update_staff/:id" component={EditStaff} />

          {/* Admin User Routes */}
          <ProtectedAdminRoute path="/admin/users" component={AdminUsers} />
          <ProtectedAdminRoute path="/admin/appointments" component={AppointmentsList} />
          <ProtectedAdminRoute path="/admin/services" component={AdminServices} />
          <ProtectedAdminRoute path="/admin/vaccines" component={AdminVaccines} />
          <ProtectedAdminRoute path="/vaccine/edit/:id" component={EditVaccine} />
          <ProtectedAdminRoute path="/service/edit/:id" component={EditService} />
          <ProtectedRoute path="/user/edit/:id" component={EditUserInfo} />
          <ProtectedAdminRoute path="/opening-hours" component={HoursForm} />
          {/* <Route path="/admin_about" component={AboutEdit} /> */}
          <ProtectedAdminRoute path="/admin/about/update/:id" component={AboutEdit} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
