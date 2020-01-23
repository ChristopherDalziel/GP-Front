import React, {Component} from 'react'
import '../../css/staff.css'
import ImageUploader from 'react-images-upload';
import axios from 'axios'


 class AddStaff extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
     
     }
    
   }

   
  
   
  render() {
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
              name="contentText"
            />
          </div>
          <form onSubmit={this.submitFile}>
            <input label='upload file' type='file' onChange={this.handleFileUpload} />
            <button type='submit'>Send</button>
          </form>
          <button type="submit">Submit</button>

        </form> 
      </div>
    </div>
      
    )
  }
}

export default AddStaff




    


    
