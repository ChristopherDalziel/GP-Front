import React from 'react'

import '../../css/staff.css'

const  AddStaff=()=>{
  return (
    <div className="add_staff">
      <div>
        <h1>Add a new Staff Here</h1>
        <form >
          <div>
            <label>Staff Name</label> <br />
            <input
              type="text"
              placeholder="Enter Staff Name"
              name="firstName"
            />
          </div>
          <div>
            <label>Staff Introduction</label> <br />
            <textarea
              rows="5" cols="33"
              placeholder="Enter the Staff Information"
              name="content"
            />
          </div>
          <button type="submit">Sign Up</button>

        </form> 
      </div>
    </div>
    
  )
}

export default AddStaff
