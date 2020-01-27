import React from "react";
import axios from "axios";

class UserAppointments extends React.Component {
  state = {
    appointments: null
  }

componentDidMount() {
  let token = sessionStorage.getItem('token');
  if (token) {
   try { axios.get(process.env.REACT_APP_BACKEND_URL + "/appointments/user_appointments", { headers: {'Authorization': token } })
   .then((response) => {
     console.log(response.data)
     let appointments = response.data;
     if (appointments !== (null || undefined))
      {
      this.setState({appointments: appointments});
     }

    })
  } catch(err) {
    this.setState({errors: err.message})
    console.log(err.message)
  }
}
}

renderAppointments() {
  let appointmentsList = this.state.appointments;
  console.log(appointmentsList)
  if (appointmentsList === null) {
    return <h4>You have no appointments scheduled</h4>
  } else {
    return appointmentsList.map((appointment) => {
      console.log(appointment)
      return (
        <>
          <h4>Appointment date: {appointment.dateTime}</h4> 
          <h4>Your comments: {appointment.comment}</h4>
        </>
      )
    })
  }
}

render() {
  return(
    this.renderAppointments()
  )
}
}


export default UserAppointments