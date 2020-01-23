import React, {Component} from 'react'
import '../../css/staff.css'
import axios from 'axios'


 class AddStaff extends Component {
  constructor () {
    super();
    this.state = {
      file: null,
      name:"",
      contentText:''
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeContentText = this.onChangeContentText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

   // SEND STAFF DATA 

  onChangeName(e) {
    this.setState({name: e.target.value})
  }

  onChangeContentText(e) {
    this.setState({contentText: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
    const staffObject = {
      name: this.state.name,
      contentText: this.state.contentText,
    };
    axios.post('http://localhost:4000/students/create-student', staffObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', email: '' })
  }

 


  //AWS
  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`http://localhost:5000/admin/upload_image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      // handle your response;
    }).catch(error => {
      // handle your error
    });
  }

  handleFileUpload = (event) => {
    this.setState({file: event.target.files});
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
              value={this.state.name} 
              onChange={this.onChangeName}
            />
          </div>
          <div>
            <label>Staff Introduction</label> <br />
            <textarea
              type="text"
              placeholder="Enter the Staff Information"
              value={this.state.contentText} 
              onChange={this.onChangeContentText}
            />
          </div>
          <div onSubmit={this.submitFile}>
            <input label='upload file' type='file' className="upload-image" onChange={this.handleFileUpload} />
            <button type='submit' className="upload">Upload Image</button>
          </div>
             <button type="submit" onSubmit={this.onSubmit}>Submit</button>

        </form> 
      </div>
    </div>
      
    )
  }
}

export default AddStaff




    


    
