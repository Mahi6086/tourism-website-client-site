import React from "react";
import tour1 from "../../../images/Tour Collection/hiking (3).png";
import tour2 from "../../../images/Tour Collection/sunrise (2).png";
import tour3 from "../../../images/Tour Collection/mountain (2).png";
import tour4 from "../../../images/Tour Collection/traveler (6).png";
import tour5 from "../../../images/Tour Collection/fire (2).png";
import tour6 from "../../../images/Tour Collection/road-signs.png";

const TourCollection = () => {
  return (
    <div className="mt-5 container">
      <h4 style={{ color: "#E8604C" }} className="text-center fw-bold">
        Are you ready to travel?
      </h4>
      <h1
        style={{ color: "#212121" }}
        className="text-center mb-3 fw-bold mt-3"
      >
        Choose Your Favorite Tour
      </h1>
      <p className="text-black-50 text-center mb-4">
        Tevily is a World Leading Online Tour Booking Platform. <br /> Where you
        can Booking your favorite tour & enjoyed advanture, seac beach, mountain
        tour etc.
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        <div className="col">
          <div
            className="card h-100 p-3 shadow"
            style={{
              backgroundColor: "#FAF5EE",
              border: "2px solid #F53232",
              borderRadius: "10px",
            }}
          >
            <img src={tour1} className="card-img-top w-25 mx-auto" alt="..." />
            <div className="card-body text-center">
              <h4 className="card-title fw-bolder ">Adventure</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card p-3 h-100 shadow"
            style={{
              backgroundColor: "#FAF5EE",
              border: "2px solid #F53232",
              borderRadius: "10px",
            }}
          >
            <img src={tour2} className="card-img-top w-25 mx-auto" alt="..." />
            <div className="card-body text-center ">
              <h4 className="card-title fw-bolder">Sea Beach</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card p-3 h-100 shadow "
            style={{
              backgroundColor: "#FAF5EE",
              border: "2px solid #F53232",
              borderRadius: "10px",
            }}
          >
            <img src={tour3} className="card-img-top w-25 mx-auto" alt="..." />
            <div className="card-body text-center ">
              <h4 className="card-title fw-bolder">Mountain</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card p-3 h-100 shadow "
            style={{
              backgroundColor: "#FAF5EE",
              border: "2px solid #F53232",
              borderRadius: "10px",
            }}
          >
            <img src={tour4} className="card-img-top w-25 mx-auto" alt="..." />
            <div className="card-body text-center ">
              <h4 className="card-title fw-bolder">Couple Tour</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card p-3 h-100 shadow "
            style={{
              backgroundColor: "#FAF5EE",
              border: "2px solid #F53232",
              borderRadius: "10px",
            }}
          >
            <img src={tour5} className="card-img-top w-25 mx-auto" alt="..." />
            <div className="card-body text-center ">
              <h4 className="card-title fw-bolder">Night Fall</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card p-3 h-100 shadow"
            style={{
              backgroundColor: "#FAF5EE",
              border: "2px solid #F53232",
              borderRadius: "10px",
            }}
          >
            <img src={tour6} className="card-img-top w-25 mx-auto" alt="..." />
            <div className="card-body text-center ">
              <h4 className="card-title fw-bolder">Popular</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCollection;
