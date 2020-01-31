import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { checkToken } from './utils/token'
import { useHistory } from 'react-router-dom'

const ProtectedAdminRoute = ({ component: Component, ...props }) => {
  let history = useHistory()

  const [user, setUser] = useState({
    auth: null,
    loading: true,
  })
  const [admin, setAdmin] = useState({
    admin: null
  })

  function getAdminStatus() {
    let adminVal = sessionStorage.getItem("admin");
    if (adminVal === "true") {
      adminVal = true;
    } else {
      adminVal = false;
    }
    return adminVal;
  }

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setUser({
        auth: true,
        loading: false
      })
      setAdmin({admin: getAdminStatus()})
    } else {
        setUser({
          auth: false,
          loading: false
        })
      }
    }, [])


  if (user.loading) {
    return null
  } else if (!user.auth) {
    return <Redirect to="/signin" />
  } else if (admin === false ) {
    console.log(admin)

    return <Redirect to="/home" />
  } else {
    console.log(user)

    console.log('this is from the protected admin route')
    return <Component user={user.auth} history={history} {...props} />
  }
}

export default ProtectedAdminRoute;
