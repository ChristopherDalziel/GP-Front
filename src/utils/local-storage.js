
export const setLocalStorage = (response) => {
  sessionStorage.setItem('token', response.token);
  // sessionStorage.setItem('admin', response.admin)
  sessionStorage.setItem('loggedIn', true);

}




