import React from 'react';

export default class UserComponent extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            users:[]
        };
    }
    componentDidMount(){
        fetch("http://127.0.0.1:5000/users").then(res=>res.json()).then(
            result=>{
                this.setState({users:result});
            }
        )
    }
    render(){
        return (
        <div>
            <h2>User Details...</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Is_active</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map(usr=>(
                        <tr key={usr.Id}>
                            <td>{usr.Id}</td>
                            <td>{usr.Email}</td>
                            <td>{usr.Role}</td>
                            <td>{usr.Is_active}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
    }
}

export const element=<UserComponent></UserComponent>;