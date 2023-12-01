import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddFacility = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [nameEmpty, setNameEmpty] = useState(false);
  const [descriptionEmpty, setDescriptionEmpty] = useState(false);

  let navigate = useNavigate();

  const saveFacility = (e) => {
    e.preventDefault();

    // Check for empty fields
    if (name === "") {
      setNameEmpty(true);
    }

    if (description === "") {
      setDescriptionEmpty(true);
    }

    if (name === "" || description === "") {
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

    let data = { name, description };

    fetch("http://localhost:8080/api/facility/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);

        console.log(res.responseMessage);

        navigate("/home");
        toast.warn(res.responseMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    });
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg text-color3"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text text-color3">
            <h5 className="card-title">Add Facility</h5>
          </div>
          <div className="card-body text-color3">
            <form onSubmit={saveFacility}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <b>Facility (name)</b>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    nameEmpty ? "empty-field" : ""
                  }`}
                  style={{
                    borderColor: nameEmpty ? "red" : "",
                  }}
                  id="name"
                  placeholder="enter name.."
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameEmpty(false);
                  }}
                  value={name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  <b>Facility Description</b>
                </label>
                <textarea
                  className={`form-control ${
                    descriptionEmpty ? "empty-field" : ""
                  }`}
                  style={{
                    borderColor: descriptionEmpty ? "red" : "",
                  }}
                  id="description"
                  rows="3"
                  placeholder="enter description.."
                  onChange={(e) => {
                    setDescription(e.target.value);
                    setDescriptionEmpty(false);
                  }}
                  value={description}
                />
              </div>

              <input
                type="submit"
                className="btn bg-color custom-bg-text"
                value="Add Facility"
              />

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFacility;
