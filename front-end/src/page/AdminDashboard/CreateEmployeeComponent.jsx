import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import EmployeeService from './Services/EmployeeService';

const CreateEmployeeComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');

  const [emptyFields, setEmptyFields] = useState([]);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const saveEmployee = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !emailId) {
      const fields = [];
      if (!firstName) fields.push('firstName');
      if (!lastName) fields.push('lastName');
      if (!emailId) fields.push('emailId');
      setEmptyFields(fields);
      alert('User cannot be saved. Please update all the fields.');
      return;
    }

    if (!validateEmail(emailId)) {
      setInvalidEmail(true);
      alert('Invalid email format. Please enter a valid email address.');
      return;
    }

    let employee = { firstName, lastName, emailId };
    console.log('employee => ' + JSON.stringify(employee));

    EmployeeService.createEmployee(employee)
      .then((res) => {
        navigate('/admindashb');
        // this.props.history.push('/admindashb'); // Not needed with useNavigate
      })
      .catch((error) => {
        console.log('Error creating employee:', error);
      });
  };

  const changeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
    setEmptyFields(emptyFields.filter((field) => field !== 'firstName'));
  };

  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
    setEmptyFields(emptyFields.filter((field) => field !== 'lastName'));
  };

  const changeEmailHandler = (event) => {
    setEmailId(event.target.value);
    setEmptyFields(emptyFields.filter((field) => field !== 'emailId'));
    setInvalidEmail(false);
  };

  const cancel = () => {
    navigate('/admindashb');
  };

  const isFieldEmpty = (fieldName) => {
    return emptyFields.includes(fieldName);
  };

  const validateEmail = (email) => {
    // Email validation logic
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <br />
      <br></br>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h3 className="text-center" style={{ marginTop: '25px' }}>Add User</h3>
          <div className="card-body" style={{ marginLeft: '263px' }}>
            <form>
              <div className={`form-group${isFieldEmpty('firstName') ? ' has-error' : ''}`}>
                <label> First Name: </label>
                <div><br></br><input
                  placeholder="First Name"
                  name="firstName"
                  className={`form-control${isFieldEmpty('firstName') ? ' is-invalid' : ''}`}
                  value={firstName}
                  onChange={changeFirstNameHandler}
                /></div><br></br>
              </div>
              <div className={`form-group${isFieldEmpty('lastName') ? ' has-error' : ''}`}>
                <label> Last Name: </label>
                <div><br></br> <input
                  placeholder="Last Name"
                  name="lastName"
                  className={`form-control${isFieldEmpty('lastName') ? ' is-invalid' : ''}`}
                  value={lastName}
                  onChange={changeLastNameHandler}
                /></div><br></br>
              </div>
              <div className={`form-group${isFieldEmpty('emailId') || invalidEmail ? ' has-error' : ''}`}>
                <label> Email Id: </label>
                <div><br></br><input
                  placeholder="Email Address"
                  name="emailId"
                  className={`form-control${isFieldEmpty('emailId') || invalidEmail ? ' is-invalid' : ''}`}
                  value={emailId}
                  onChange={changeEmailHandler}
                /></div>
                {invalidEmail && <p className="text-danger">Please enter a valid email address.</p>}
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
  );
};

export default CreateEmployeeComponent;
