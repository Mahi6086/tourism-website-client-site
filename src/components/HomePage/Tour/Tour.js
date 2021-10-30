import React from "react";
import { Link } from "react-router-dom";

const Tour = (props) => {
  const { id, name, image, description } = props.tour;
  return (
    <div>
      <div className="col">
        <div
          style={{ backgroundColor: "#FFFFFF" }}
          className="card h-100 p-3 shadow service"
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
                $350/per
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
            <p className="card-text text-black-50 mt-2">{description}</p>
            <Link to={`/exploreTour/${id}`}>
              <button
                style={{
                  backgroundColor: "#FAF5EE",
                  border: "3px solid #F53232",
                  //   borderRadius: "10px",
                }}
                type="button"
                class="btn btn-outline text-center fw-bold"
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
