import React, { useEffect, useState } from "react";
import Tour from "../Tour/Tour";

const Tours = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("./tour.json")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
  return (
    <div
      className="bg-light"
      style={{
        // backgroundColor: "#FAF5EE",
        // border: "2px solid #F53232",
        borderRadius: "10px",
      }}
    >
      <div className="container-md mt-5 pt-5 pb-5">
        <div>
          <h4 style={{ color: "#E8604C" }} className="text-center fw-bold">
            The Top Places For
          </h4>
          <h1 style={{ color: "#212121" }} className="text-center mb-3 fw-bold">
            Planning Your Holiday
          </h1>
          <p className="text-black-50 text-center mb-5">
            Popular Package Amazing Tours Liked By The Adventurous, Sea-beach,
            Mountain, Couple Tour, Night Fall.
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {tours.map((tour) => (
              <Tour key={tour.id} tour={tour}></Tour>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
