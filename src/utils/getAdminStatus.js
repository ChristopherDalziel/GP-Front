// Function can be used to prevent users who do not have the admin credentials on their token from accessing pages

function getAdminStatus() {
  let adminVal = sessionStorage.getItem("val");
  if (adminVal === "true") {
    adminVal = true;
  } else {
    adminVal = false;
  }
  return adminVal;
}

export default getAdminStatus;
