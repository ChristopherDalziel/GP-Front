
// import axios from 'axios';
// import {
//   REGISTER_SUCCESS,
//   REGISTER_FAIL
// } from './types';
// import setAuthToken from '../utils/setAuthToken';



// // Register User
// export const register = ({ firstName,lastName, email, phone, password }) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   const body = JSON.stringify({firstName,lastName, email, phone, password });

//   try {
//     const res = await axios.post('http://localhost:5000/users/register', body, config);

//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data
//     });

//     dispatch(loadUser());
//   } catch (err) {
//     const errors = err.response.data.errors;

//     // if (errors) {
//     //   errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     // }

//     dispatch({
//       type: REGISTER_FAIL
//     });
//   }
// };

