import React, { useState } from "react";
import { Form, Input, InputNumber, Button, DatePicker } from 'antd';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const FormItem = Form.Item;
const AddStudent = () => {
    let history = useHistory();
    const [student, setStudent] = useState({
        Pid: "",
        Email: "",
        Dept_Code: "",  
        Course_Name: "",
        CGPA: "",
        Semester: "",
        Description: "",
        Date_of_birth: ""
    });

    const { Pid, Email, Dept_Code, Course_Name, CGPA, Semester, Description, Date_of_birth } = student;
    const onInputChange = e => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("/addstudent", student);
        history.push("/students");
    };
    return (
        <>
        <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        >
            <Form.Item label="Pid">
            <Input onChange={e => onInputChange(e)} />
            </Form.Item>
            <Form.Item label="Email">
            <Input type="Email" onChange={e => onInputChange(e)} />
            </Form.Item>
            <Form.Item label="Dept_Code">
            <Input onChange={e => onInputChange(e)} />
            </Form.Item>
            <Form.Item label="Course_Name">
            <Input onChange={e => onInputChange(e)} />
            </Form.Item>
            <Form.Item label="CGPA">
            <Input type="number" step="0.01" onChange={e => onInputChange(e)} />
            </Form.Item>
            <Form.Item label="semester">
            <Input type="number" onChange={e => onInputChange(e)} />
            </Form.Item>
            <Form.Item label="Descriotion">
            <Input onChange={e => onInputChange(e)} />
            </Form.Item>
            <Form.Item label="Date_of_birth">
            <DatePicker onChange={e => onInputChange(e)} />
            </Form.Item>
            <Form.Item label="ADD Student">
            <Button type="primary" htmlType="submit">Add Student</Button>
            </Form.Item>
        </Form>
        </>
    );
};

export default AddStudent;
