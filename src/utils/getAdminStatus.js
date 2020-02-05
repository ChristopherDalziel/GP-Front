// Function can be used to prevent users who do not have the admin credentials on their token from accessing pages
import axios from "axios";

async function getAdminStatus() {
 const response =  await axios.get(process.env.REACT_APP_BACKEND_URL + '/users/check-admin', { headers: { Authorization: sessionStorage.getItem("token") } })
 console.log(response.data)
 let adminVal;
  if (response.data.admin === "true") {
    adminVal = true;
  } else if (response.data.success === "false") {
    adminVal = false;
  } else {
    adminVal = false;
  }
  console.log(adminVal)
  return adminVal;
}

export default getAdminStatus;
