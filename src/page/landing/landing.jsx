import React, { useState } from "react";
import { Link } from "react-router-dom";
import MailList from "./mailList/mailList";
import Navbar from "./navbar/Navbar";
import HeaderL from "./headerL/HeaderL";
import HostItem from "./hostItem/HostItem";
import TripPlanner from "./TripPlanner_Banner/Tripplanner";
import FeaturedProperties from "./featuredProperties/featuredProperties";
import Featured from "./featured/featured";
import PropertyList from "./propertyList/propertyList";
import Footer from "../Footer";
import "./landing.css";

const Home = () => {
  const [isMouseOver1, setIsMouseOver1] = useState(false);
  const [isMouseOver2, setIsMouseOver2] = useState(false);
  const [isMouseOver3, setIsMouseOver3] = useState(false);

  const handleMouseEnter1 = () => {
    setIsMouseOver1(true);
  };

  const handleMouseLeave1 = () => {
    setIsMouseOver1(false);
  };

  const handleMouseEnter2 = () => {
    setIsMouseOver2(true);
  };

  const handleMouseLeave2 = () => {
    setIsMouseOver2(false);
  };

  const handleMouseEnter3 = () => {
    setIsMouseOver3(true);
  };

  const handleMouseLeave3 = () => {
    setIsMouseOver3(false);
  };

  return (
    <div>
      <Navbar />
      <HeaderL />
      <div className="homeContainer">
        <h1
          className={`homeTitle1 ${isMouseOver1 ? "expandWidth1" : ""}`}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          Browse by Property Location...
        </h1>
        <Featured />

        <div className="placeLoad">
          <Link to="/home">
            <button className="loadBtn">Load more</button>
          </Link>
        </div>

        <h1
          className={`homeTitle2 ${isMouseOver2 ? "expandWidth2" : ""}`}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          Browse by Property Type...
        </h1>
        <PropertyList />

        <div className="typeLoad">
          <Link to="/home">
            {" "}
            <button className="loadBtn">Load more</button>
          </Link>
        </div>

        <h1
          className={`homeTitle3 ${isMouseOver3 ? "expandWidth3" : ""}`}
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          Browse by Property Reviews...
        </h1>
        <FeaturedProperties />

        <div className="reveiwLoad">
          {" "}
          <Link to="/home">
            <button className="loadBtn" style={{ marginTop: "10px" }}>
              Load more
            </button>
          </Link>
        </div>

        <MailList />
        <TripPlanner />
        <HostItem />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
