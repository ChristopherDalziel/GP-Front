function logout (e, history) {
  e.preventDefault();
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('admin');
  sessionStorage.removeItem('loggedIn');
  return <Redirect to ="/" /> 
}