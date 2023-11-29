import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const UserLoginForm = () => {
  let navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
    role: "",
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const forgetpassword = (e) => {
    navigate("/forgetP");
  };

  const loginAction = (e) => {
    e.preventDefault();

    // Check if user role is selected
    if (!loginRequest.role) {
      toast.error("Please select a user role", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // Check for empty fields after clicking login
    if (!loginRequest.emailId || !loginRequest.password) {
      toast.error("Please fill all the required fields", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    }).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        console.log(res);

        if (res.role === "Admin") {
          sessionStorage.setItem("active-admin", JSON.stringify(res));
        } else if (res.role === "Customer") {
          sessionStorage.setItem("active-customer", JSON.stringify(res));
        } else if (res.role === "Hotel") {
          sessionStorage.setItem("active-hotel", JSON.stringify(res));
        } else {
          alert("Please enter the correct Email or Password");
        }
        
        toast.success("logged in successfully!!!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        
        navigate("/");
        window.location.reload(true);
      });
    });
  };

  // Function to check if a field is empty
  const isFieldEmpty = (fieldName) => {
    return loginRequest[fieldName] === "";
  };

  const [loginActionClicked, setLoginActionClicked] = useState(false);

  const handleLoginButtonClick = (e) => {
    e.preventDefault();
    setLoginActionClicked(true);
    loginAction(e);
  };

  return (
    <div>
      <div className="mt-2 d-flex align-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h4 className="card-title">User Login</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3 text-color">
                <label htmlFor="role" className="form-label">
                  <b>User Role</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className={`form-control ${
                    isFieldEmpty("role") ? "empty-field-input" : ""
                  }`}
                  name="role"
                >
                  <option value="">Select Role</option>
                  <option value="Admin">Super Admin</option>
                  <option value="Customer">Customer</option>
                  <option value="Hotel">Hotel admin</option>
                </select>
              </div>

              <div className="mb-3 text-color">
                <label htmlFor="emailId" className="form-label">
                  <b>Email Id</b>
                </label>
                <input
                  type="email"
                  className={`form-control ${
                    isFieldEmpty("emailId") ? "empty-field-input" : ""
                  }`}
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={loginRequest.emailId}
                  style={{
                    borderColor: isFieldEmpty("emailId") ? "red" : "",
                  }}
                  required
                />
              </div>
              <div className="mb-3 text-color">
                <label htmlFor="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    isFieldEmpty("password") ? "empty-field-input" : ""
                  }`}
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={loginRequest.password}
                  autoComplete="on"
                  style={{
                    borderColor: isFieldEmpty("password") ? "red" : "",
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn bg-color custom-bg-text"
                onClick={handleLoginButtonClick}
              >
                Login
              </button>

              <button
                type="submit"
                className="btn bg-color custom-bg-text"
                onClick={forgetpassword}
                style={{ marginLeft: "70px", marginTop: "2px" }}
              >
                Forget Password
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
