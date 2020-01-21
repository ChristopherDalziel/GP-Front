import React, { Fragment, useState} from "react";
import Nav from "../components/Nav";
import "../css/signUp.css";
import axios from 'axios';

const Register =() =>{

  const [formData,setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    password:'',
    password2:''
  });

  const {firstName,lastName,email,phone,password,password2}= formData

  const onChange=(e)=>setFormData({
    ...formData,[e.target.name]: e.target.value
  })

  const onSubmit =  async e => {
    e.preventDefault()
    if(password !== password2){
      console.log('password not match');
      
    }else{
      // console.log(formData); 
      const newUser ={firstName,lastName, email, phone, password,password2}
      try{
        const config = {
          headers:{
            'content-type':"application/json"
          } 
        }
     
        const body=JSON.stringify(newUser)
        console.log(body)

        const res = await axios.post('http://localhost:5000/users/register', body, config)
        // debugger;
        console.log(res.data);
        
      }catch(err){
        console.log(err.message)
      }
    }
  }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     axios.post('https://localhost:5000/users/register', formData)
//       .then(function (response) {
//           console.log(response)
//       })
//       .catch(function (error) {
//           console.log(error)
//       }) 
// }


  return (
    <Fragment>
      <Nav />
      <div className="signUp">
        <div className="container">
          <div className="imageSignUp"></div>
          <div className="content-signUp">
            <div>
              <h1>New to Klinic Doctor Leong?</h1>
              <h1>Sign UP Now</h1>
              <form onSubmit={e => onSubmit(e)}>
                <div className="input-wrapper-1">
                  <label>First Name</label> <br />
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    value={firstName}
                    onChange={e=>onChange(e)}
                    required
                  />
                </div>
                <div className="input-wrapper-2">
                  <label>Last Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={e=>onChange(e)}
                    required
                  />
                </div>
                <div className="input-wrapper-3">
                  <label>Email</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter you Email"
                    name="email"
                    value={email}
                    onChange={e=>onChange(e)}
                    required
                  />
                </div>
                <div className="input-wrapper-4">
                  <label>Phone Number</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your Phone Number"
                    name="phone"
                    value={phone}
                    onChange={e=>onChange(e)}
                    required
                  />
                </div>
                <div className="input-wrapper-5">
                  <label>Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter the Password"
                    name="password"
                    value={password}
                    onChange={e=>onChange(e)}
                    required
                  />
                </div>
                <div className="input-wrapper-6">
                  <label>Confirm Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="confirm the Password"
                    name="password2"
                    value={password2}
                    onChange={e=>onChange(e)}
                    required
                  />
                </div>
                <button type="submit">Sign Up</button>

              </form>

              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
