import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const UserRegister = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    contact: "",
    street: "",
    city: "",
    pincode: "",
    role: "",
    age: "",
    sex: "",
  });

  // Determine the user role based on the URL
  useEffect(() => {
    if (document.URL.indexOf("admin") !== -1) {
      setUser((prevUser) => ({ ...prevUser, role: "Admin" }));
    } else if (document.URL.indexOf("hotel") !== -1) {
      setUser((prevUser) => ({ ...prevUser, role: "Hotel" }));
    } else if (document.URL.indexOf("customer") !== -1) {
      setUser((prevUser) => ({ ...prevUser, role: "Customer" }));
    }
  }, []);

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [genders, setGenders] = useState([]);

  const retrieveAllGenders = async () => {
    const response = await axios.get("http://localhost:8080/api/user/gender");
    return response.data;
  };

  useEffect(() => {
    const getAllGenders = async () => {
      const allGenders = await retrieveAllGenders();
      if (allGenders) {
        setGenders(allGenders.genders);
      }
    };

    getAllGenders();
  }, []);

  const calculateAge = (dob) => {
    const currentDate = new Date();
    const selectedDate = new Date(dob);
    let age = currentDate.getFullYear() - selectedDate.getFullYear();

    const monthDifference = currentDate.getMonth() - selectedDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && currentDate.getDate() < selectedDate.getDate())
    ) {
      age--;
    }

    setUser({ ...user, age });
  };

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

  const saveUser = (event) => {
    event.preventDefault();

    if (alreadyRegistered) {
      toast.error("Already saved.");
      return;
    }

    if (validateFields()) {
      setSubmitDisabled(true);

      fetch("http://localhost:8080/api/user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((result) => {
          toast.success("Registered Successfully!!!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          result
            .json()
            .then((res) => {
              console.log("response", res);
              setRegistrationSuccess(true);
              setAlreadyRegistered(true);
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              setSubmitDisabled(false);
            });
        });
    }
  };

  const validateFields = () => {
    if (
      user.firstName.trim() === "" ||
      user.lastName.trim() === "" ||
      user.emailId.trim() === "" ||
      user.password.trim() === "" ||
      user.contact.trim() === "" ||
      user.street.trim() === "" ||
      user.city.trim() === "" ||
      user.pincode.trim() === "" ||
      user.sex === "0"
    ) {
      toast.error("Please fill all the empty fields.");
      return false;
    }

    if (user.password.length < 4) {
      toast.error("Password should contain at least 4 characters.");
      return false;
    }

    return true;
  };

  return (
    <div>
      {registrationSuccess && (
        <div className="alert alert-success text-center">
          Profile has been created successfully. Please log in.
        </div>
      )}
      
      <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          className="card form-card border-color text-color custom-bg"
          style={{ width: "50rem" }}
        >
          <div className="card-header bg-color custom-bg-text text-center">
            <h5 className="card-title">Register {user.role}</h5>
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={saveUser}>
            <div className="col-md-6 mb-3 text-color">
                <label htmlFor="firstName" className="form-label">
                  <b>First Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={handleUserInput}
                  value={user.firstName}
                />
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="lastName" className="form-label">
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={handleUserInput}
                  value={user.lastName}
                />
              </div>

              <div className="col-md-6 mb-3 text-color">
                <b>
                  <label htmlFor="emailId" className="form-label">
                    Email Id
                  </label>
                </b>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={user.emailId}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={user.password}
                />
              </div>

              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="sex" className="form-label">
                  <b>User Gender</b>
                </label>
                <select
                  className="form-control"
                  name="sex"
                  onChange={handleUserInput}
                  value={user.sex}
                >
                  <option value="0">Select Gender</option>
                  {genders.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="contact" className="form-label">
                  <b>Contact No</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="contact"
                  name="contact"
                  onChange={handleUserInput}
                  value={user.contact}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="dob" className="form-label">
                  <b>Date of Birth</b>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                  onChange={(e) => calculateAge(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="street" className="form-label">
                  <b>Street</b>
                </label>
                <textarea
                  className="form-control"
                  id="street"
                  name="street"
                  rows="3"
                  onChange={handleUserInput}
                  value={user.street}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="city" className="form-label">
                  <b>City</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  onChange={handleUserInput}
                  value={user.city}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="pincode" className="form-label">
                  <b>ZipCode</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  onChange={handleUserInput}
                  value={user.pincode}
                />
              </div>

              <div className="d-flex aligns-items-center justify-content-center">
                <input
                  type="submit"
                  className="btn bg-color custom-bg-text col-md-3"
                  value="Register User"
                  disabled={submitDisabled}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserRegister;
