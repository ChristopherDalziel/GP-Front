import React from 'react'
import Nav from '../components/Nav'
import '../css/staff.css'
import StaffList from '../components/Staff/StaffList'




const  Staff=()=>{
  return (
    <>
      <Nav/>
      <div className="staffs">
        <div className="staff-infor">
           <StaffList/>
        </div>
      

      </div>

    </>
    
  )
}

export default Staff
