import { Link } from "react-router-dom";
import LocationNavigator from "../LocationComponent/LocationNavigator";
import HotelCarousel from "./HotelCarousel";
import payment from "../Payment/Payment";

const HotelCard = (hotel) => {
  return (
    <div className="col"  style={{
     
      cursor: "default"
    }}>
      <div class="card border-color rounded-card card-hover product-card custom-bg h-100">

      <Link
              to={`/hotel/${hotel.item.id}/location/${hotel.item.location.id}`}
              className=""
            >
              
           
      <img
    src={"http://localhost:8080/api/hotel/" + hotel.item.image2}
    className="card-img-top rounded mx-auto d-block m-2"
    alt="img"
    style={{
      maxHeight: "270px",
      maxWidth: "100%",
      width: "auto",
      border: "3px solid  #264653", // Set the border color and size
      borderRadius: "10px", // Set the border radius
      transition: "transform 0.3s",
  
    }}
    onMouseOver={(e) => {
      e.target.style.transform = "scale(1.1)";
    }}
    onMouseOut={(e) => {
      e.target.style.transform = "scale(1)";
    }}
  />  </Link>

        {/* <HotelCarousel
      item={{
        carouselId : hotel.item.image1, 
        image1 : hotel.item.image1,
        image2 : hotel.item.image2,
        image3 : hotel.item.image3,
      }}
      /> */}

        <div class="card-body text-color3">
          <h5 class="card-title d-flex justify-content-between">
            <div>
              <b>{hotel.item.name}</b>
            </div>
            <LocationNavigator
              item={{
                id: hotel.item.location.id,
                city: hotel.item.location.city,
              }}
            />
          </h5>
          <p className="card-text">{hotel.item.description}</p>
          <p class="text-color3"> 
            <b>
              <i>Total Room :</i> {hotel.item.totalRoom}
            </b>
          </p>
        </div>
        <div class="card-footer">
          <div className="text-center text-color3">
            <p>
              <span>
              <h4>
  Price Per Day{" "}
  <span
    style={{
      backgroundColor: "#00D0D0",
      border: "1px solid #264653",
      borderRadius: "5px",
      cursor: "default"
    }}
  >
    Lkr: {hotel.item.pricePerDay} /=
  </span>
</h4>

              </span>
            </p>
          </div>
 
          
          <div className="d-flex justify-content-center">
            <Link
              to={`/hotel/${hotel.item.id}/location/${hotel.item.location.id}`}
              className="btn bg-color custom-bg-text"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default HotelCard;
