import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { checkToken } from './utils/token'
import { useHistory } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...props }) => {
  let history = useHistory()

  const [user, setUser] = useState({
    auth: null,
    loading: true,
  })

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    console.log(token)
    if (token) {
      setUser({
        auth: true,
        loading: false
      })} else {
        setUser({
          auth: false,
          loading: false
        })
      }
    }, [])
  console.log(user.auth)

  if (user.loading) {
    return null
  } else if (!user.auth) {
    return <Redirect to="/signin" />
  } else {
    return <Component user={user.auth} history={history} {...props} />
  }
}

export default ProtectedRoute
