import React,{useState} from 'react'
import '../../css/staff.css'
import ImageUploader from 'react-images-upload';

const  AddStaff=()=>{

  const [pictures, setPicture]=useState([])

  
  const onDrop=(picture) =>{
    this.setPicture({
       pictires: pictures.concat(picture)
    });
}
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
          <ImageUploader
                withIcon={true}
                withPreview={true}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                onChange={onDrop}
            
            />
          <button type="submit">Sign Up</button>

        </form> 
      </div>
    </div>
    
  )
}

export default AddStaff
