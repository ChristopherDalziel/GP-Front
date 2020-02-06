// Logout function
function logout(e, history) {
  e.preventDefault();
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("val");
  sessionStorage.removeItem("auth");
  return <Redirect to="/" />;
}
