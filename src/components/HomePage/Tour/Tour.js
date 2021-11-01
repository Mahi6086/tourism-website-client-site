import React from "react";
import { Link } from "react-router-dom";
import "./Tour.css";

const Tour = (props) => {
  const { _id, name, image, description, price, days, location, person } =
    props.tour;
  return (
    <div>
      <div className="col tour-card">
        <div
          style={{ backgroundColor: "#FFFFFF" }}
          className="card h-100 p-3 shadow element"
        >
          <img
            src={image}
            className="card-img-top rounded-3  mx-auto"
            alt="..."
          />
          <div className="card-body ms-1">
            <div className="d-flex justify-content-between align-items-center">
              <h4 style={{ color: "tomato" }} className="card-title fw-bolder ">
                {name}
              </h4>
              <span
                style={{ color: "#E8604C" }}
                className="fw-bolder fs-4 mb-2"
              >
                ${price}/per
                {/* $350/per */}
              </span>
            </div>
            <div style={{ color: "#FFA41C" }}>
              <span className="mb-3">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <small className="text-black-50 ms-2 fw-bold">
                  (100 Reviews)
                </small>
              </span>
            </div>
            <div
              style={{ backgroundColor: "#FAF5EE" }}
              className="row row-cols-md-3 g-3 mb-3 mt-3 pb-3 text-black-50 fw-bolder ps-4 rounded rounded-3"
            >
              <span>{days} DAYS</span>
              <span>{person}+</span>
              <span>{location}</span>
            </div>
            <p className="card-text text-black-50 mt-2">{description}</p>

            <Link to={`/exploreTour/${_id}`}>
              <button
                style={{
                  backgroundColor: "coral",
                  // border: "3px solid #F53232",
                  //   borderRadius: "10px",
                }}
                type="button"
                class="btn btn-outline text-center fw-bold w-100 pb-3"
              >
                Explore Tour
                <span className="fw-bolder fs-4 ms-1">+</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
