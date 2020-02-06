import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import ProtectedRoute from "./ProtectedRoute";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
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
import BurgerNav from "./components/BurgerNav";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <BurgerNav />
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
          <Route path="/admin/staff" component={StaffList} />
          <Route path="/admin/add_staff" component={CreateStaff} />
          <Route path="/admin/update_staff/:id" component={EditStaff} />

          {/* Admin User Routes */}
          <Route path="/admin/users" component={AdminUsers} />
          <Route path="/admin/appointments" component={AppointmentsList} />
          <Route path="/admin/services" component={AdminServices} />
          <Route path="/admin/vaccines" component={AdminVaccines} />
          <Route path="/vaccine/edit/:id" component={EditVaccine} />
          <Route path="/service/edit/:id" component={EditService} />
          <Route path="/user/edit/:id" component={EditUserInfo} />
          <Route path="/admin/opening-hours" component={HoursForm} />
          <Route path="/admin/about/update/:id" component={AboutEdit} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
