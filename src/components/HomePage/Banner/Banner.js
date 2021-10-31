import React from "react";
import img1 from "../../../images/Banner/banner-1.jpg";
import img2 from "../../../images/Banner/banner6 (2).jpg";
import img3 from "../../../images/Banner/banner3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100 img-fluid opacity-75"
              alt="..."
            />
            <div
              // style={{ marginBottom: "600px" }}
              className="carousel-caption d-none d-md-block tour-title"
            >
              <h1
                style={{
                  color: "tomato",

                  fontWeight: "bolder",
                }}
                className="banner-title"
              >
                Plan Your Best Holiday <br /> With Us & Enjoy
              </h1>
              <h3 className="fw-bolder">
                Travelling Around The World. Journy To Explore The Nature.
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block img-fluid w-100 opacity-75"
              alt="..."
            />
            <div
              // style={{ marginBottom: "600px" }}
              className="carousel-caption d-none d-md-block tour-title"
            >
              <h1
                style={{
                  color: "tomato",

                  fontWeight: "bolder",
                }}
                className="banner-title"
              >
                Explore Your Summer Holiday <br /> With Us & Enjoy
              </h1>
              <h3 className="fw-bolder">
                Travelling Around The World. Journy To Explore The Nature.
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block  img-fluid w-100 opacity-75"
              alt="..."
            />
            <div
              // style={{ marginBottom: "600px" }}
              className="carousel-caption d-none d-md-block tour-title"
            >
              <h1
                style={{
                  color: "tomato",

                  fontWeight: "bolder",
                }}
                className="banner-title"
              >
                Travel & Adventures
              </h1>
              <h3 className="fw-bolder">Where Would You Like To Go?</h3>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
