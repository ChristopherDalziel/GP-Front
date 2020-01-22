import axios from 'axios';

export const checkToken = async (token, setUser) => {
  try {
    await axios.get(process.env.REACT_APP_BACKEND_URL + '/users/check-token', {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    setUser({
      auth: true,
      loading: false
    })
  } catch (err) {
    setUser({
      auth: false,
      loading: false
    })
  }
  }

  export const checkPasswordToken = async (token, setUser) => {
    try {
      await axios.get(process.env.REACT_APP_BACKEND_URL + '/users/check-password-token', {
        headers: {
          token
        }
      })
      setUser({
        auth: true,
        loading: false
      })
    } catch(err) {
      console.log(err.message)
      setUser({
        auth: false,
        loading: false
      })
    }
  }
