import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ExploreTour.css";

import { Link } from "react-router-dom";

const ExploreTour = () => {
  const { tourId } = useParams();
  const [exploreTour, setExploreTour] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/tours/${tourId}`)
      .then((res) => res.json())
      .then((data) => setExploreTour(data));
  }, []);
  return (
    <div style={{ backgroundColor: "#FAF5EE" }} className="tour-details">
      <div className="container mt-5 pb-5 pt-5">
        <div>
          <h4 style={{ color: "tomato" }} className="text-center fw-bold">
            Time to Travel
          </h4>
          <h1 style={{ color: "#212121" }} className="text-center mb-3 fw-bold">
            Travel & Adventures
          </h1>
          <p className="text-black-50 text-center mb-4">
            Plan Your Trip with Trevily.There are many variations of passages of{" "}
            <br />
            available by injected hum randomised words which don't look even
            slightly.
          </p>
        </div>
        <div className="row mt-5 mx-5 shadow p-5 rounded rounded-3">
          <div className="col col-sm-12 col-md-6">
            <img
              className="rounded-3 img-fluid mt-5"
              src={exploreTour?.image}
              alt=""
            />
          </div>
          <div style={{ marginTop: "40px" }} className="col col-sm-12 col-md-6">
            <div className="d-flex justify-content-between align-items-center">
              <h3 style={{ color: "tomato" }} className="card-title fw-bolder ">
                {exploreTour?.name}
              </h3>
              <span
                style={{ color: "#E8604C" }}
                className="fw-bolder fs-4 mb-2"
              >
                $350/per
              </span>
            </div>

            <p className="text-justify">{exploreTour?.description}</p>
            <h3 style={{ color: "tomato" }} className="card-title fw-bolder ">
              Tour Details
            </h3>
            <div className="row d-flex ">
              <div className="col col-md-4">
                <h5 className="mb-5">Covered Places</h5>
                <h5>Duration</h5>
                <h5 className="mt-3">Starting</h5>
                <h5 className="mt-3">Ending</h5>
                <h5 className="mt-3">Person</h5>
                <h5 className="mt-3">Available Seat</h5>
              </div>
              <div className="col col-md-3">
                <p className="mb-5">-----------------</p>
                <p>-----------------</p>
                <p>-----------------</p>
                <p>-----------------</p>
                <p>-----------------</p>
                <p>-----------------</p>
              </div>
              <div className="col col-md-5">
                <p>
                  Denpasar, Ubud, Kuta, Canggu, Jimbaran & Uluwatu (Bukit
                  Peninsula)
                </p>
                <p style={{ marginTop: "-15px" }}>05 Days 06 Nights</p>
                <p>01 December 2021</p>
                <p>07 December 2021</p>
                <p>50 Person In Total</p>
                <p>12</p>
              </div>
              <Link to="/placeOrder">
                <button
                  style={{ backgroundColor: "tomato" }}
                  type="button"
                  className="btn btn-lg fw-bolder fs-5"
                >
                  Booking Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/*    <div className=" mt-5 mb-5 rounded rounded-3">
          <h1
            style={{ color: "tomato", fontSize: "40px" }}
            className="fw-bolder text-center pt-5 pb-5"
          >
            Please Booking Your Travel Form
          </h1>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            
              <input
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="text"
                {...register("location")}
                required
                placeholder="Location"
              />
              <br /> <br />
              <input
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="text"
                {...register("name")}
                required
                placeholder="Please Type Your Name"
              />
              <br /> <br />
              <input
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="email"
                {...register("email")}
                required
                placeholder="Please Type Your E-mail"
              />
              <br /> <br />
             
              <input
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="number"
                {...register("phone", { required: true })}
                required
                placeholder="Please Type Your Number"
              />
              <br />
              <br />
              <input
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="date"
                {...register("date", { required: true })}
                required
                placeholder="dd/mm/yy"
              />
              <br />
              <br />
              <textarea
                className="p-2 m-2 w-100 border-0 rounded rounded-3 p-3 text-black-50 fs-6"
                type="textarea"
                {...register("message", { required: true })}
                required
                placeholder="Please Type Your Message"
              />
              <br />
              <br />
            
              {errors.exampleRequired && <span>This field is required</span>}
              <input
                style={{ backgroundColor: "tomato" }}
                className="p-2 mb-5  btn  text-center w-100 fw-bolder fs-4"
                type="Submit"
              />
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ExploreTour;
