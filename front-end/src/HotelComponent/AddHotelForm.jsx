import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddHotelForm = () => {
  const [locations, setLocations] = useState([]);
  const [hotelUsers, setHotelUsers] = useState([]);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [hotel, setHotel] = useState({
    name: "",
    description: "",
    locationId: "",
    street: "",
    pincode: "",
    emailId: "",
    pricePerDay: "",
    totalRoom: "",
    userId: "",
  });

  let navigate = useNavigate();

  const retrieveAllLocations = async () => {
    const response = await axios.get("http://localhost:8080/api/location/fetch");
    return response.data;
  };

  useEffect(() => {
    const getAllLocations = async () => {
      const allLocations = await retrieveAllLocations();
      if (allLocations) {
        setLocations(allLocations.locations);
      }
    };

    getAllLocations();
  }, []);

  const retrieveAllHotelUsers = async () => {
    const response = await axios.get("http://localhost:8080/api/user/hotel");
    return response.data;
  };

  useEffect(() => {
    const getAllHotelUsers = async () => {
      const allHotelUsers = await retrieveAllHotelUsers();
      if (allHotelUsers) {
        setHotelUsers(allHotelUsers.users);
      }
    };

    getAllHotelUsers();
  }, []);

  const handleInput = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  // Save hotel logic here

  // Redirect to the homepage
 



  const saveHotel = () => {
    if (validateFields()) {
      const formData = new FormData();
      formData.append("image1", selectedImage1);
      formData.append("image2", selectedImage2);
      formData.append("image3", selectedImage3);
      formData.append("name", hotel.name);
      formData.append("locationId", hotel.locationId);
      formData.append("description", hotel.description);
      formData.append("street", hotel.street);
      formData.append("pincode", hotel.pincode);
      formData.append("emailId", hotel.emailId);
      formData.append("pricePerDay", hotel.pricePerDay);
      formData.append("totalRoom", hotel.totalRoom);
      formData.append("userId", hotel.userId);

      axios.post("http://localhost:8080/api/hotel/add", formData).then((result) => {
        result.json().then((res) => {
          console.log(res);
          console.log(res.responseMessage);
          navigate("home");
        });
      });
    } else {
      alert("Cannot save hotel. Please update all the necessary fields.");
    }
  };

  const validateFields = () => {
    // Perform field validation here
    // Return true if all fields are valid, otherwise return false
    return (
      hotel.name &&
      hotel.locationId &&
      hotel.description &&
      hotel.street &&
      hotel.pincode &&
      hotel.emailId &&
      hotel.pricePerDay &&
      hotel.totalRoom &&
      hotel.userId &&
      selectedImage1 &&
      selectedImage2 &&
      selectedImage3
    );
  };

  return (
    <div>
      <div className="mt-2 d-flex align-items-center justify-content-center text-color3">
        <div className="card form-card border-color custom-bg" style={{ width: "50rem" }}>
          <div className="card-header bg-color custom-bg-text text-center text-color3">
            <h5 className="card-title">Add Hotel</h5>
          </div>
          <div className="card-body text-color3">
            <form className="row g-3">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  <b>Hotel Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleInput}
                  value={hotel.name}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  <b>Location</b>
                </label>
                <select name="locationId" onChange={handleInput} className="form-control">
                  <option value="">Select Location</option>
                  {locations.map((location) => (
                    <option value={location.id}>{location.city}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="description" className="form-label">
                  <b>Hotel Description</b>
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  onChange={handleInput}
                  value={hotel.description}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  <b>Hotel Admin</b>
                </label>
                <select name="userId" onChange={handleInput} className="form-control">
                  <option value="">Select Hotel Admin</option>
                  {hotelUsers.map((hotelUser) => (
                    <option value={hotelUser.id}>
                      {hotelUser.firstName} {hotelUser.lastName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6 mb-3 mt-1">
                <label htmlFor="quantity" className="form-label">
                  <b>Hotel Email</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleInput}
                  value={hotel.emailId}
                />
              </div>

              <div className="col-md-6 mb-3 mt-1">
                <label htmlFor="quantity" className="form-label">
                  <b>Price Per Day</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="pricePerDay"
                  name="pricePerDay"
                  onChange={handleInput}
                  value={hotel.pricePerDay}
                />
              </div>

              <div className="col-md-6 mb-3 mt-1">
                <label htmlFor="totalRoom" className="form-label">
                  <b>Total Room</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="totalRoom"
                  name="totalRoom"
                  onChange={handleInput}
                  value={hotel.totalRoom}
                />
              </div>

              <div className="col-md-6 mb-3 mt-1">
                <label htmlFor="street" className="form-label">
                  <b>Street</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="street"
                  name="street"
                  onChange={handleInput}
                  value={hotel.street}
                />
              </div>

              <div className="col-md-6 mb-3 mt-1">
                <label htmlFor="pincode" className="form-label">
                  <b>Zipcode</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  onChange={handleInput}
                  value={hotel.pincode}
                />
              </div>

              <div className="col-md-6 mb-3 mt-1">
                <label htmlFor="image1" className="form-label">
                  <b>Image 1</b>
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image1"
                  accept="image/*"
                  onChange={(e) => setSelectedImage1(e.target.files[0])}
                />
              </div>

              <div className="col-md-6 mb-3 mt-1">
                <label htmlFor="image2" className="form-label">
                  <b>Image 2</b>
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image2"
                  accept="image/*"
                  onChange={(e) => setSelectedImage2(e.target.files[0])}
                />
              </div>

              <div className="col-md-6 mb-3 mt-1">
                <label htmlFor="image3" className="form-label">
                  <b>Image 3</b>
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image3"
                  accept="image/*"
                  onChange={(e) => setSelectedImage3(e.target.files[0])}
                />
              </div>

              <div className="col-12 text-center">
              <button type="button" className="btn bg-color custom-bg-text" onClick={saveHotel}>
  Save Hotel
</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHotelForm;
