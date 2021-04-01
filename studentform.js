import React from 'react';
import { Form, Input, InputNumber, Button, DatePicker, message } from 'antd';
import axios from 'axios'

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
        <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onClick={()=>{this.submit()}}>
          <Form.Item label="Pid"></Form.Item>
          <Input type="text" value={this.state.Pid} name="Pid" onChange={(data )=>{this.setState({Pid:data.target.value}) }} /> <br /> <br />
          <Form.Item label="Email"></Form.Item>
          <Input type="email" value={this.state.Email} name="Email" onChange={(data )=>{ this.setState({Email:data.target.value}) }} /> <br /> <br />
          <Form.Item label="Dept_Code"></Form.Item>
          <Input type="text" value={this.state.Dept_Code} name="Dept_code" onChange={(data )=>{this.setState({Dept_Code:data.target.value}) }} /> <br /> <br />
          <Form.Item label="Course_Name"></Form.Item>
          <Input type="text" value={this.state.Course_Name} name="Course_Name" onChange={(data )=>{this.setState({Course_Name:data.target.value}) }} /> <br /> <br />
          <Form.Item label="CGPA"></Form.Item>
          <Input type="number" step="0.01" value={this.state.CGPA} name="CGPA" onChange={(data )=>{this.setState({CGPA:data.target.value}) }} /> <br /> <br />
          <Form.Item label="Semester"></Form.Item>
          <Input type="number" value={this.state.Semester} name="Semester" onChange={(data )=>{this.setState({Semester:data.target.value}) }} /> <br /> <br />
          <Form.Item label="Description"></Form.Item>
          <Input type="text" value={this.state.Description} name="Description" onChange={(data )=>{this.setState({Description:data.target.value}) }} /> <br /> <br />
          <Form.Item label="Date_of_birth"></Form.Item>
          <Input type="date" value={this.state.Date_of_birth} name="Date_of_birth" onChange={(data )=>{this.setState({Date_of_birth:data.target.value}) }} /> <br /> <br />

          <Button type="primary" htmlType="submit" >Submit</Button>
        </Form>
      </div>
    )
  }
}

