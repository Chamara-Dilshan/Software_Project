import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import HotelCarousel from "../HotelComponent/HotelCarousel";
import { useParams } from "react-router-dom";
import axios from "axios";
import HotelCard from "../HotelComponent/HotelCard";
import "./AddHotelReview.css";

const AddHotelReview = () => {
  const user = JSON.parse(sessionStorage.getItem("active-customer"));

  const [userId, setUserId] = useState(user ? user.id : "");

  const { hotelId, locationId } = useParams();

  const [star, setStar] = useState("");
  const [review, setReview] = useState("");

  const [hotels, setHotels] = useState([]);

  const [hotel, setHotel] = useState({
    id: "",
    name: "",
    description: "",
    street: "",
    pincode: "",
    emailId: "",
    pricePerDay: "",
    totalRoom: "",
    image1: "",
    image2: "",
    image3: "",
    userId: "",
    location: { id: "", city: "", description: "" },
    facility: [{ id: "", name: "", description: "" }],
  });

  const navigate = useNavigate();

  const retrieveHotel = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/hotel/id?hotelId=${hotelId}`
    );
    return response.data;
  };

  useEffect(() => {
    const getHotel = async () => {
      const retrievedHotel = await retrieveHotel();
      setHotel(retrievedHotel.hotel);
    };

    const getHotelsByLocation = async () => {
      const allHotels = await retrieveHotelsByLocation();
      if (allHotels) {
        setHotels(allHotels.hotels);
      }
    };

    getHotel();
    getHotelsByLocation();
  }, [hotelId]);

  const retrieveHotelsByLocation = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/hotel/location?locationId=${locationId}`
    );
    return response.data;
  };

  const saveHotelReview = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login as a Customer to add your review!!!");
      return;
    }

    if (star === "" || review === "") {
      alert("Please fill all the required fields.");
      return;
    }

    setUserId(user.id);
    const data = { userId, hotelId, star, review };

    fetch("http://localhost:8080/api/hotel/review/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);
        navigate(`/hotel/${hotel.id}/location/${hotel.location.id}`);
        console.log(res.responseMessage);
        toast.warn(res.responseMessage, {
          position: "top-center",
          autoClose: 1000,
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
    <div className="container-fluid mb-5">
      <div className="row" style={{ marginLeft: "-100px" }}>
        <div className="col-sm-2 mt-2"></div>
        <div className="col-sm-3 mt-2">
          <div className="image-border1234">
            <HotelCarousel
              item={{
                image1: hotel.image1,
                image2: hotel.image2,
                image3: hotel.image3,
              }}
            />
          </div>
        </div>

        <div className="col-sm-5 mt-2">
          <div
            className="card form-card border-color custom-bg text-color3"
            style={{ width: "40rem" }}
          >
            <div className="card-header bg-color text-center custom-bg-text">
              <h5 className="card-title">Add Hotel Review</h5>
            </div>
            <div className="card-body text-color3">
              <form onSubmit={saveHotelReview}>
                <div className="mb-3">
                  <label className="form-label" style={{ width: "30rem" }}>
                    <b>Star</b>
                  </label>

                  <select
                    name="locationId"
                    onChange={(e) => {
                      setStar(e.target.value);
                    }}
                    className="form-control"
                  >
                    <option value="">Select Star</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="review" className="form-label">
                    <b>Hotel Review</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="review"
                    rows="3"
                    placeholder="Enter review..."
                    onChange={(e) => {
                      setReview(e.target.value);
                    }}
                    value={review}
                  />
                </div>

                <input
                  type="submit"
                  className="btn bg-color custom-bg-text text-color3"
                  value="Add Review"
                />

                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-sm-12">
          <h2>All Hotels in {hotel.location.city} Location:</h2>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {hotels.map((h) => {
              return <HotelCard item={h} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHotelReview;
