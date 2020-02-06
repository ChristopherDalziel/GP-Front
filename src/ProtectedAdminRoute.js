import React, { useState, useEffect } from "react";
import { Redirect, useHistory, withRouter } from "react-router-dom";

const ProtectedAdminRoute = ({ component: Component, ...props }) => {
  let history = useHistory();

  const [user, setUser] = useState({
    auth: null,
    loading: true
  });
  const [admin, setAdmin] = useState(null);

  const getAdminStatus = () => {
    let adminVal = sessionStorage.getItem("val");
    if (adminVal === "true") {
      adminVal = true;
    } else {
      adminVal = false;
    }
    return adminVal;
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const admin = getAdminStatus();
    if (token) {
      setUser({
        auth: true,
        loading: false
      });
      setAdmin(admin);
    } else {
      setUser({
        auth: false,
        loading: false
      });
    }
  }, []);

  if (user.loading) {
    return null;
  } else if (!user.auth) {
    return <Redirect to="/signin" />;
  } else if (admin === false) {
    alert("You are not authorized to view this page");
    return <Redirect to="/" />;
  } else {
    return <Component user={user.auth} {...props} />;
  }
};

export default withRouter(ProtectedAdminRoute);
