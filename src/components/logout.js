function logout (e, history) {
  e.preventDefault();
  localStorage.removeItem('token');
  return <Redirect to ="/" /> 
}