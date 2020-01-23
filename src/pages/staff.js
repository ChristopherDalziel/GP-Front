import React from 'react'
import Nav from '../components/Nav'
import '../css/staff.css'
import AddStaff from '../components/Staff/AddStaff'


const  Staff=()=>{
  return (
    <>
      <Nav/>
      <div className="staffs">
        <div className="staff-infor">
          <h1>Staff Management Board</h1>
        </div>
        <AddStaff/>  
      </div>

    </>
    
  )
}

export default Staff
