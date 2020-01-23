import axios from "axios";


export async function getAdminStatus(token) {
  await axios.get(process.env.REACT_APP_BACKEND_URL + '/users/find-user/', { headers: {'Authorization': sessionStorage.getItem('token') } }).then((response) => {
    let adminStatus = response.data.admin;
    sessionStorage.setItem('admin', adminStatus);
  })
}

export const setLocalStorage = (token) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('loggedIn', true);
}




