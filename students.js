import React from 'react';

export default class StudentComponent extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            students:[]
        };
    }
    componentDidMount(){
        fetch("http://127.0.0.1:5000/students").then(res=>res.json()).then(
            result=>{
                this.setState({students:result});
            }
        )
    }
    render(){
        return (
        <div>
            <h2>Student Details...</h2>
            <table>
                <thead>
                    <tr>
                        <th>Pid</th>
                        <th>Email</th>
                        <th>Dept_Code</th>
                        <th>Course_Name</th>
                        <th>CGPA</th>
                        <th>Semester</th>
                        <th>Description</th>
                        <th>Date_of_birth</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.students.map(stdnt=>(
                        <tr key={stdnt.Pid}>
                            <td>{stdnt.Pid}</td>
                            <td>{stdnt.Email}</td>
                            <td>{stdnt.Dept_Code}</td>
                            <td>{stdnt.Course_Name}</td>
                            <td>{stdnt.CGPA}</td>
                            <td>{stdnt.Semester}</td>
                            <td>{stdnt.Description}</td>
                            <td>{stdnt.Date_of_birth}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
    }
}

export const element=<StudentComponent></StudentComponent>;