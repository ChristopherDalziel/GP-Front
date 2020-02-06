import axios from "axios";

export const checkToken = async (token, setUser) => {
  try {
    await axios
      .get(process.env.REACT_APP_BACKEND_URL + "/users/check-token", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        if (response.data.success === false) {
          setUser({
            auth: false,
            loading: false
          });
        } else {
          setUser({
            auth: true,
            loading: false
          });
        }
      });
  } catch (err) {
    setUser({
      auth: false,
      loading: false
    });
  }
};

// Checking that the password token is valid
export const checkPasswordToken = async (token, setUser) => {
  try {
    await axios.get(
      process.env.REACT_APP_BACKEND_URL + "/users/check-password-token",
      {
        headers: {
          token
        }
      }
    );
    setUser({
      auth: true,
      loading: false
    });
  } catch (err) {
    console.log(err.message);
    setUser({
      auth: false,
      loading: false
    });
  }
};
