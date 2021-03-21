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
//     return (
//         <div className="container">
//             <div className="w-75 mx-auto shadow p-5">
//                 <h2 className="text-center mb-4">Add A Student</h2>
//                 <form onSubmit={e => onSubmit(e)}>
//                     <div className="form-group">
//                         <input
//                         type="text"
//                         className="form-control form-control-lg"
//                         placeholder="Enter Your Pid"
//                         name="Pid"
//                         value={Pid}
//                         onChange={e => onInputChange(e)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                         type="email"
//                         className="form-control form-control-lg"
//                         placeholder="Enter Your Email"
//                         name="Email"
//                         value={Email}
//                         onChange={e => onInputChange(e)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                         type="text"
//                         className="form-control form-control-lg"
//                         placeholder="Enter Your Dept_Code"
//                         name="Dept_Code"
//                         value={Dept_Code}
//                         onChange={e => onInputChange(e)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                         type="text"
//                         className="form-control form-control-lg"
//                         placeholder="Enter Your Course_Name"
//                         name="Course_Name"
//                         value={Course_Name}
//                         onChange={e => onInputChange(e)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                         type="number" step="0.01"
//                         className="form-control form-control-lg"
//                         placeholder="Enter Your CGPA"
//                         name="CGPA"
//                         value={CGPA}
//                         onChange={e => onInputChange(e)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                         type="number"
//                         className="form-control form-control-lg"
//                         placeholder="Enter Your Semester"
//                         name="Semester"
//                         value={Semester}
//                         onChange={e => onInputChange(e)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                         type="text"
//                         className="form-control form-control-lg"
//                         placeholder="Enter Your Description"
//                         name="Description"
//                         value={Description}
//                         onChange={e => onInputChange(e)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                         type="date"
//                         className="form-control form-control-lg"
//                         placeholder="Enter Your Date_of_birth"
//                         name="Date_of_birth"
//                         value={Date_of_birth}
//                         onChange={e => onInputChange(e)}
//                         />
//                     </div>
//                     <button className="btn btn-primary btn-block">Add Student</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

export default AddStudent;