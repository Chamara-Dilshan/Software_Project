import GetAllLocations from "../LocationComponent/GetAllLocations";
import LocationNavigator from "../LocationComponent/LocationNavigator";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import HotelCard from "./HotelCard";
import HotelCarousel from "./HotelCarousel";
import GetHotelFacilities from "../FacilityComponent/GetHotelFacilities";
import GetHotelReviews from "../HotelReviewComponent/GetHotelReviews";
import Footer from "../page/Footer";
import { redirect, Link, useNavigate, useParams } from "react-router-dom";
import Payment from "../Payment/Payment";


const Hotel = (setTotal) => {

  const { hotelId, locationId } = useParams();

  let user = JSON.parse(sessionStorage.getItem("active-customer"));
  let admin = JSON.parse(sessionStorage.getItem("active-admin"));

  const [quantity, setQuantity] = useState("");

  const [hotels, setHotels] = useState([]);

const navigate = useNavigate();


  const [facilitiesToPass, setFacilitiesToPass] = useState([]);

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
<div className="row row-cols-1 row-cols-md-4 g-4">
  {hotels.map((h) => {
    return <HotelCard key={hotelId} item={h} />;
  })}
</div>
  const [booking, setBooking] = useState({
    userId: "",
    hotelId: "",
    checkIn: "",
    checkOut: "",
    totalRoom: "",
    totalDay: "",
  });

  const currency = (e) => {
    navigate("/currencyC");
  };

  const handleBookingInput = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };
  
  const retrieveHotel = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/hotel/id?hotelId=" + hotelId
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

    console.log("Print hotel");
    console.log(hotel.json);

    setFacilitiesToPass(hotel.facility);
  }, [hotelId]);

  const retrieveHotelsByLocation = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/hotel/location?locationId=" + locationId
    );
    console.log(response.data);
    return response.data;
  };

  const saveProductToCart = (userId) => {
    fetch("http://localhost:8080/api/user/cart/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: quantity,
        userId: userId,
        hotelId: hotelId,
      }),
    }).then((result) => {
      console.log("result", result);

      toast.success("Products added to Cart Successfully!!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      result.json().then((res) => {
        console.log("response", res);
      });
    });
  };

  const bookHotel = (e) => {
    if (user == null) {
      alert("Please login to book the hotels!!!");
      e.preventDefault();
    } else {
      const formData = new FormData();
      formData.append("userId", user.id);
      formData.append("hotelId", hotelId);
      formData.append("checkIn", booking.checkIn);
      formData.append("checkOut", booking.checkOut);
      formData.append("totalRoom", booking.totalRoom);
      formData.append("totalDay", booking.totalDay);

      console.log(formData);

      axios
        .post("http://localhost:8080/api/book/hotel/", formData)
        .then((result) => {
          result.json().then((res) => {
            console.log(res);
            console.log(res.responseMessage);
            alert("Hotel Booked Successfully!!!");
            console.log("Hotel Booked Successfully!!!");

          });
        }); 
              
        navigate('/pay') 
 
    
    }
  };

  const navigateToAddHotelFacility = () => {
    navigate("/hotel/" + hotelId + "/add/facility");
  };
  const totalPrice = hotel.pricePerDay * booking.totalDay * booking.totalRoom;
  const navigateToAddReviewPage = () => {
    navigate("/hotel/" + hotelId + "/location/" + locationId + "/add/review");
  };
  return (
    <div className="container-fluid mb-5 text-color3">
      <div class="row">
        <div class="col-sm-3 mt-2">
          <div class="card form-card border-color custom-bg">
            <HotelCarousel
              item={{
                image1: hotel.image1,
                image2: hotel.image2,
                image3: hotel.image3,
              }}
            />
          </div>
        </div>
        <div class="col-sm-5 mt-2">
          <div class="card form-card border-color custom-bg">
            <div class="card-header bg-color text-color3">
              <div className="d-flex justify-content-between">
                <h1 className="custom-bg-text">{hotel.name}</h1>
              </div>
            </div>

            <div class="card-body text-left  text-color3">
              <div class="text-left mt-3">
                <h3>Description :</h3>
              </div>
              <h4 class="card-text">{hotel.description}</h4>
            </div>

            <div class="card-footer custom-bg">
              <div className="d-flex justify-content-between">
                <p>
                  <span>
                  <div style={{ 
  backgroundColor: '#00D0D0',
  padding: '10px',
  borderRadius: '5px',
}}>
  <h4 style={{ backgroundColor: '#00D0D0', fontSize: '17px' }}>
  Price Per Day Lkr: {hotel.pricePerDay}/=
</h4>

</div>

                  </span>
                </p>

                <p class="text-color3">
                  <b>Total Room : {hotel.totalRoom}</b>
                </p>
              </div>

              <div>
                <form class="row g-3" onSubmit={bookHotel}>
                  <div class="col-auto">
                    <label for="checkin">Check-in</label>
                    <input
                      type="date"
                      class="form-control"
                      id="checkin"
                      name="checkIn"
                      onChange={handleBookingInput}
                      value={booking.checkIn}
                      required
                    />
                  </div>
                  <div class="col-auto">
                    <label for="checkout">Check-out</label>
                    <input
                      type="date"
                      class="form-control"
                      id="checkout"
                      name="checkOut"
                      onChange={handleBookingInput}
                      value={booking.checkOut}
                      required
                    />
                  </div>
                  <div class="col-auto">
                    <label for="totalroom">Total Room</label>
                    <input
                      type="number"
                      class="form-control"
                      id="totalroom"
                      name="totalRoom"
                      onChange={handleBookingInput}
                      value={booking.totalRoom}
                      required
                    />
                  </div>
                  <div class="col-auto">
                    <label for="totalDay">Total Days</label>
                    <input
                      type="number"
                      class="form-control"
                      id="totalDay"
                      name="totalDay"
                      onChange={handleBookingInput}
                      value={booking.totalDay}
                      required
                    />
                  </div>
                  {(() => {
                if (user) {
                  console.log(user);
                  return (
                    <div>
                    <div style={{ 
                      marginLeft: '280px',
                      marginTop: '-50px',
                            }}>
  <Payment totalAmount={totalPrice} />
</div>
                    </div>
                    
                  );
                }
              })()}


                  <div className="d-flex justify-content-center">
                    <div>
                      
                    </div> <div className="d-flex justify-content-between">
      <p style={{ position: 'absolute', bottom: '12px', left: '37%', transform: 'translateX(0%)' }}>
        <span>  
        <div style={{ 
  backgroundColor: '#00D0D0',
  padding: '10px',
  borderRadius: '5px',
}}>
  <h4>Total Payable Amount Lkr: {totalPrice} /=</h4>
</div>

        </span>
      </p>
    </div>  </div> 
                </form>
              </div>

              {(() => {
                if (admin) {
                  console.log(admin);
                  return (
                    <div>
                      <input
                        type="submit"
                        className="btn custom-bg bg-color mb-3"
                        value="Add Facilities"
                        onClick={navigateToAddHotelFacility}
                      />
                    </div>
                  );
                }
              })()}
              <div>
            {/* Add your new button here */}
            <input
              type="submit"
              className="btn custom-bg bg-color mb-3"
              value="Change Currency"
              onClick={currency}
            />
          </div>
              {(() => {
                if (user) {
                  console.log(user);
                  return (
                    <div>
                      <input
                        type="submit"
                        className="btn custom-bg bg-color mb-3 text-color3"
                        value="Add Review"
                        onClick={navigateToAddReviewPage}

                      />
                    </div>
                    
                  );
                }
              })()}

             



           
            </div>
          </div>
        </div>
        <div class="col-sm-2 mt-2">
          <GetHotelFacilities item={hotel} />
        </div>

        <div class="col-sm-2 mt-2">
  <GetHotelReviews item={hotel} />
  <div class="card-footer custom-bg" style={{ position: 'relative' }}>
  </div>
</div>
        
      </div>

      <div className="row mt-4 ">
        <div className="col-sm-12">
          <h2>Other Hotels in {hotel.location.city} Location:</h2>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {hotels.map((h) => {
              return <HotelCard item={h} />;
            })}
          </div>
        </div>
      </div>
      <br />
      <hr />
      <Footer />
    </div>
  );
};

export default Hotel;
