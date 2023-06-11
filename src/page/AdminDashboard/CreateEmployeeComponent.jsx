import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import EmployeeService from './Services/EmployeeService';


const CreateEmployeeComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');

  const saveEmployee = (e) => {
    e.preventDefault();
    let employee = { firstName, lastName, emailId };
    console.log('employee => ' + JSON.stringify(employee));

    EmployeeService.createEmployee(employee).then(res =>{
      navigate('/admindashb');
      this.props.history.push('/admindashb');
});
    // Add your save logic here
  };

  const changeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const changeEmailHandler = (event) => {
    setEmailId(event.target.value);
  };

  const cancel = () => {
    navigate('/admindashb');
  };

  return (
    <div>
      <br /><br></br>
      <div className="a">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add User</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> First Name: </label>
                  <div><br></br><input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={changeFirstNameHandler}
                  /></div><br></br>
                </div> 
                <div className="form-group">
                  <label> Last Name: </label>
                 <div><br></br> <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={changeLastNameHandler}
                  /></div><br></br>
                </div>
                <div className="form-group">
                 <label> Email Id: </label>
                 <div><br></br><input
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={changeEmailHandler}
                  /></div>
                </div>
                <br></br><br></br>
                <button className="btn btn-success" onClick={saveEmployee}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeeComponent;