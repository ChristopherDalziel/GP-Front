import axios from "axios";


export async function getAdminStatus(token) {
  let response = await axios.get(process.env.REACT_APP_BACKEND_URL + `/users/find-user/${token}`).then((response) => {
    console.log(response.data)
    let adminStatus = response.data.admin;
    localStorage.setItem('admin', adminStatus);
  })
}

export const setLocalStorage = (token) => {
  localStorage.setItem('token', token);
  localStorage.setItem('loggedIn', true);
}




