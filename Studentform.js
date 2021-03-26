import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
  PageHeader,
  Select,
  DatePicker,
  message,
} from "antd";
import "antd/dist/antd.css";
import axios from "axios";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],
    };
  }
  handleSubmit = (values) => {
    console.log(values)
    axios
      .post("http://127.0.0.1:5000/addstudent", {
        data: {
          Pid: this.target.elements.Pid.value,
          Email: this.data.item.Email,
          Dept_Code: this.data.item.Dept_Code,
          Course_Name: this.data.item.Course_Name,
          CGPA: this.data.item.CGPA,
          Semester: this.data.item.Semester,
          Description: this.data.item.Description,
          Date_of_birth: this.data.item.Date_of_birth
        },
      })
      .then((res) => {
        if (res.status == 200) message.success("data successfully updated!");
        this.fetchstudent();
      })
      .catch((err) => {
        message.error("data profile failed to update ...");
      });
  };
    render() {
    return (
      <div>
        <Form {...formItemLayout} name="update" onFinish={this.handleSubmit}>
          <Form.Item label="Pid :" name="Pid">
            <Input placeholder="ID" />
          </Form.Item>
          <Form.Item label="Email :" name="Email">
            <Input placeholder="Enter your Email" />
          </Form.Item>
          <Form.Item label="Dept_Code :" name="Dept_Code">
            <Input placeholder="Enter your Dept_Code" />
          </Form.Item>
          <Form.Item label="Course_Name :" name="Course_Name">
            <Input placeholder="Enter your Course_Name" />
          </Form.Item>
          <Form.Item label="CGPA :" name="CGPA">
            <Input placeholder="Enter your CGPA" />
          </Form.Item>
          <Form.Item label="Semester :" name="Semester">
            <Input placeholder="Enter your Semester" />
          </Form.Item>
          <Form.Item label="Description :" name="Description">
            <Input placeholder="Enter your Description" />
          </Form.Item>
          <Form.Item label="Date_of_birth :" name="Date_of_birth">
            <Input placeholder="Enter your Date_of_birth" />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
            >
              create
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export const element=<AddStudent></AddStudent>;