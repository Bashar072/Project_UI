import React from 'react';

import $ from 'jquery';

export default class StudentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

  updatePid(event) {
    this.setState({
      Pid: event.target.value 
    });
  }

  updateEmail(event) {
    this.setState({
      Email: event.target.value 
    });
  }

  updateDeptCode(event) {
    this.setState({
      DeptCode: event.target.value 
    });
  }

  updateCourseName(event) {
    this.setState({
      CourseName: event.target.value 
    });
  }

  updateCGPA(event) {
    this.setState({
      CGPA: event.target.value 
    });
  }

  updateSemester(event) {
    this.setState({
      Semester: event.target.value 
    });
  }

  updateDesciption(event) {
    this.setState({
      Description: event.target.value 
    });
  }

  updateDateOfBirth(event) {
    this.setState({
      DateOfBirth: event.target.value 
    });
  }

  save() {
    var context = this;

    $.ajax({
      url: "http://127.0.0.1:5000/addstudent",
      method: "POST",
      data: {
        Pid: context.state.Pid,
        Email: context.state.Email,
        Dept_Code: context.state.DeptCode,
        Course_Name: context.state.CourseName,
        CGPA: context.state.CGPA,
        Semester: context.state.Semester,
        Description: context.state.Description,
        Date_of_birth: context.state.DateOfBirth
      },
      success: function(response) {
        alert("Successfully saved record!");
      },
      error: function(response) {
        alert("Error in saving record!");
      }
    });
  }

  render() {
    return (
      <div>
        PID:
        <input type="text" value={this.state.Pid} onChange={this.updatePid.bind(this)} />
        Email:
        <input type="email" value={this.state.Email} onChange={this.updateEmail.bind(this)} />
        Department Code:
        <input type="text" value={this.state.DeptCode} onChange={this.updateDeptCode.bind(this)} />
        Course Name:
        <input type="text" value={this.state.CourseName} onChange={this.updateCourseName.bind(this)} />
        CGPA:
        <input type="number" step="0.01" value={this.state.CGPA} onChange={this.updateCGPA.bind(this)} />
        Semester:
        <input type="number" value={this.state.Semester} onChange={this.updateSemester.bind(this)} />
        Description:
        <input type="text" value={this.state.Description} onChange={this.updateDesciption.bind(this)} />
        Date of Birth:
        <input type="date" value={this.state.DateOfBirth} onChange={this.updateDateOfBirth.bind(this)} />
        <hr/>

        <button onClick={this.save.bind(this)}>
          Save
        </button>
      </div>
    );
  }
}

export const element=<StudentForm></StudentForm>;