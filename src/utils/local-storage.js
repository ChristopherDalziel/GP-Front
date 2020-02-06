export const setLocalStorage = response => {
  sessionStorage.setItem("token", response.token);
  sessionStorage.setItem("val", response.admin);
  sessionStorage.setItem("auth", true);
};
