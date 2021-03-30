import React from 'react';

export default class studentForm extends React.Component {
  constructor() {
    super();
    this.state={
      Pid: "",
      Email: "",
      Dept_Code: "",  
      Course_Name: "",
      CGPA: "",
      Semester: "",
      Description: "",
      Date_of_birth: ""
    }
  }

  submit()
  {
    let url="http://127.0.0.1:5000/addstudent";
    let data=this.state;
    fetch(url,{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn("resp".resp)
      })
    })
  }

  render() {

    return (
      <div>
        <h1> student Registration Form</h1>
        <input type="text" value={this.state.Pid} name="Pid" onChange={(data )=>{this.setState({Pid:data.target.value}) }} /> <br /> <br />
        <input type="email" value={this.state.Email} name="Email" onChange={(data )=>{ this.setState({Email:data.target.value}) }} /> <br /> <br />
        <input type="text" value={this.state.Dept_Code} name="Dept_code" onChange={(data )=>{this.setState({Dept_Code:data.target.value}) }} /> <br /> <br />
        <input type="text" value={this.state.Course_Name} name="Course_Name" onChange={(data )=>{this.setState({Course_Name:data.target.value}) }} /> <br /> <br />
        <input type="number" step="0.01" value={this.state.CGPA} name="CGPA" onChange={(data )=>{this.setState({CGPA:data.target.value}) }} /> <br /> <br />
        <input type="number" value={this.state.Semester} name="Semester" onChange={(data )=>{this.setState({Semester:data.target.value}) }} /> <br /> <br />
        <input type="text" value={this.state.Description} name="Description" onChange={(data )=>{this.setState({Description:data.target.value}) }} /> <br /> <br />
        <input type="date" value={this.state.Date_of_birth} name="Date_of_birth" onChange={(data )=>{this.setState({Date_of_birth:data.target.value}) }} /> <br /> <br />

        <button onClick={()=>{this.submit()}} >Submit</button>
      </div>
    )
  }
}
