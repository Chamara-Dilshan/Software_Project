import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from './Services/EmployeeService'
import Footer from '../Footer'



class ListEmployeeComponent extends Component {
    constructor(props) {
        
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }
    

    render() {
        return (
            <div>
                <h2 className="text-center" style={{ marginTop: '30px' }}>Users List</h2>
                 <div className = "row">
                 <Link to="./add-employee">
                    <button className="btn btn-primary" onClick={this.addEmployee} style={{ marginLeft: '50px' }}> Add Users</button></Link>
                 </div>
                 <br></br>
                 <div className="a" style={{ marginLeft: '50px', marginRight: '50px' }}>
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> User First Name</th>
                                    <th> User Last Name</th>
                                    <th> User Email Id</th>
                                {  /*  <th> Role</th>
                                    <th> Phone Number</th>*/}
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                            
                                            {/*} <td> {employee.role}</td>
                                             <td> {employee.address}</td>*/}
                                             <td>
                                                
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <Link to="./view-employee/{id}"><button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button></Link> 
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 <div><Footer></Footer></div>   
            </div>
        )
    }
}

export default ListEmployeeComponent
