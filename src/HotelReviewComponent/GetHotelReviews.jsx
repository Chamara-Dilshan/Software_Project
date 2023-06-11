import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import star from "../images/star.png";

const GetHotelReviews = (hotel) => {
  const [reviews, setReviews] = useState([]);

  const { hotelId } = useParams();

  console.log(
    "Printing hotel Id fetch in Get Hotel Reviews : " + hotel.item.id
  );

  const retrieveAllReviews = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/hotel/review/fetch?hotelId=" + hotelId
    );
    return response.data;
  };

  useEffect(() => {
    const getAllReviews = async () => {
      const allReviews = await retrieveAllReviews();
      if (allReviews) {
        setReviews(allReviews.hotelReviews);
      }
    };

    getAllReviews();
  }, []);

  return (
    <div
      class="list-group form-card border-color"
      style={{
        height: "25rem",
      }}
    >
      <div class="list-group-item list-group-item-action bg-color custom-bg-text text-color3">
        <b>Reviews</b>
      </div>
      <div
        style={{
          overflowY: "auto",
        }}
      >
        {reviews.map((review) => {
          return (
            <div class="list-group-item list-group-item-action text-color3 custom-bg">
              <b className="text-color1">{review.user + " "}</b>
              <b className="text-color">{review.star + " /5 "}</b>
              <img
                src={star}
                width="20"
                height="20"
                className="d-inline-block align-top"
                alt=""
              />
              <br />
              <p>{review.review}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetHotelReviews;
